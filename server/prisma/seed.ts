import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash('password', 10);

  // Create users
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      firstName: 'Alice',
      lastName: 'Smith',
      hashedPassword: hashedPassword,
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      firstName: 'Bob',
      lastName: 'Johnson',
      hashedPassword: hashedPassword,
    },
  });

  // Create brands
  const brand1 = await prisma.brand.create({
    data: {
      userId: alice.id,
      name: 'Brand A',
      description: 'Description for Brand A',
      logoUrl: 'http://example.com/logo1.png',
      backgroundPhotoUrl: 'http://example.com/background1.png',
    },
  });

  // Create stores
  const store1 = await prisma.store.create({
    data: {
      brandId: brand1.id,
      address: '123 Main St',
      latitude: 40.712776,
      longitude: -74.005974,
      isActive: true,
    },
  });

  // Create tags
  const tag1 = await prisma.tag.create({
    data: {
      name: 'Organic',
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: 'Vegan',
    },
  });

  // Associate tags with store
  await prisma.storeTag.createMany({
    data: [
      { storeId: store1.id, tagId: tag1.id },
      { storeId: store1.id, tagId: tag2.id },
    ],
  });

  // Create favorite store for Bob
  await prisma.userFavoriteStore.create({
    data: {
      userId: bob.id,
      storeId: store1.id,
    },
  });

  // Create products
  const product1 = await prisma.product.create({
    data: {
      storeId: store1.id,
      name: 'Product A',
      description: 'Description for Product A',
      oldPrice: 19.99,
      actualPrice: 14.99,
      availableQuantity: 100,
      expiryDate: new Date('2024-12-31'),
      pickupStartTime: new Date('2024-05-15T09:00:00Z'),
      pickupEndTime: new Date('2024-05-15T18:00:00Z'),
    },
  });

  // Create a transaction
  const transaction1 = await prisma.transaction.create({
    data: {
      userId: bob.id,
      storeId: store1.id,
      productId: product1.id,
      quantity: 2,
      totalAmount: 29.98,
      transactionDate: new Date(),
    },
  });

  // Create a review for the transaction
  await prisma.review.create({
    data: {
      transactionId: transaction1.id,
      rating: 5,
      comment: 'Great product!',
    },
  });

  console.log({
    alice,
    bob,
    brand1,
    store1,
    tag1,
    tag2,
    product1,
    transaction1,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { faker } from '@faker-js/faker';
import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const numberOfUsers = 100;

async function main() {
  const hashedPassword = await hashPassword('password');
  await createSpecificUsers(hashedPassword);
  await createRandomUsers(hashedPassword);
  await createStores();
  await createFavoriteStores();
  await createProducts();
  await createTransactions();
  await createReviews();
  console.log('Seeding completed!');
}

async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

async function createSpecificUsers(hashedPassword: string): Promise<void> {
  // Create specific users Alice and Bob with hardcoded data
  const usersData: Prisma.UserCreateInput[] = [
    {
      email: 'joaco.ian@mail.com',
      firstName: 'Joaquin',
      lastName: 'Iannuzzi',
      hashedPassword,
    },
    {
      email: 'juli.bar@mail.com',
      firstName: 'Julian',
      lastName: 'Barbieri',
      hashedPassword,
    },
  ];

  for (const userData of usersData) {
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }
}

async function createRandomUsers(hashedPassword: string): Promise<void> {
  // Generate additional random users
  const users: Prisma.UserCreateInput[] = [];
  for (let i = 0; i < numberOfUsers; i++) {
    users.push({
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      hashedPassword,
    });
  }
  await prisma.user.createMany({ data: users });
}

async function createStores(): Promise<void> {
  // Generate random stores for a subset of users
  const stores: Prisma.StoreCreateManyInput[] = [];
  const usersList = await prisma.user.findMany();
  for (const user of usersList) {
    if (Math.random() > 0.6) continue; // Skip creating stores for some users
    stores.push({
      userId: user.id,
      name: faker.company.name(),
      description: faker.company.catchPhrase(),
      logoUrl: faker.image.urlLoremFlickr({ category: 'business' }),
      backgroundPhotoUrl: faker.image.urlLoremFlickr({ category: 'abstract' }),
      address: faker.location.streetAddress(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      isActive: faker.datatype.boolean({ probability: 0.9 }),
    });
  }
  await prisma.store.createMany({ data: stores });
}

async function createFavoriteStores(): Promise<void> {
  // Generate random favorite stores for users
  const userFavoriteStores: Prisma.UserFavoriteStoreCreateManyInput[] = [];
  const usersList = await prisma.user.findMany();
  const storesList = await prisma.store.findMany();
  for (const user of usersList) {
    const storeCount = faker.number.int({ min: 2, max: 6 });
    const selectedStoresIndeces = new Set<number>();
    while (selectedStoresIndeces.size < storeCount) {
      selectedStoresIndeces.add(Math.floor(Math.random() * storesList.length));
    }
    for (const index of selectedStoresIndeces) {
      userFavoriteStores.push({
        userId: user.id,
        storeId: storesList[index].id,
      });
    }
  }
  await prisma.userFavoriteStore.createMany({ data: userFavoriteStores });
}

async function createProducts(): Promise<void> {
  // Generate random products for each store
  const products: Prisma.ProductCreateManyInput[] = [];
  const storesList = await prisma.store.findMany();
  for (const store of storesList) {
    const oldPrice = parseFloat(
      faker.commerce.price({ min: 10000, max: 15000, dec: 0 }),
    );
    const actualPrice = parseFloat(
      faker.commerce.price({ min: 2000, max: oldPrice * 0.5, dec: 0 }),
    );
    const pickupStartTime = faker.date.future();
    const pickupEndTime = new Date(
      pickupStartTime.getTime() +
        faker.number.int({ min: 3600000, max: 10800000 }),
    ); // Add 1 to 3 hours
    products.push({
      storeId: store.id,
      type: faker.commerce.productAdjective(),
      oldPrice,
      actualPrice,
      availableQuantity: faker.number.int({ min: 1, max: 5 }),
      pickupStartTime,
      pickupEndTime,
    });
  }
  await prisma.product.createMany({ data: products });
}

async function createTransactions(): Promise<void> {
  const transactions: Prisma.TransactionCreateManyInput[] = [];
  const usersList = await prisma.user.findMany();
  const productsList = await prisma.product.findMany();

  for (const user of usersList) {
    if (Math.random() > 0.3) continue;

    // Check if any products are available
    const availableProducts = productsList.filter(
      (product) => product.availableQuantity > 0,
    );
    if (availableProducts.length === 0) continue;

    const productsCount = faker.number.int({
      min: 1,
      max: Math.min(2, availableProducts.length),
    });

    const selectedProducts = new Set<number>();

    for (let i = 0; i < productsCount; i++) {
      let productIndex;
      do {
        productIndex = faker.number.int({
          min: 0,
          max: availableProducts.length - 1,
        });
      } while (selectedProducts.has(productIndex));

      selectedProducts.add(productIndex);
      const product = availableProducts[productIndex];

      const quantity = faker.number.int({
        min: 1,
        max: product.availableQuantity,
      });
      transactions.push({
        userId: user.id,
        productId: product.id,
        quantity: quantity,
        totalAmount: product.actualPrice * quantity,
        transactionDate: faker.date.recent(),
        delivered: faker.datatype.boolean(),
      });

      product.availableQuantity -= quantity;
    }
  }

  // Create all transactions at once
  await prisma.transaction.createMany({ data: transactions });

  // Accumulate changes to product quantities for bulk update
  const productUpdates: Promise<unknown>[] = [];
  for (const product of productsList) {
    if (product.availableQuantity >= 0) {
      productUpdates.push(
        prisma.product.update({
          where: { id: product.id },
          data: { availableQuantity: product.availableQuantity },
        }),
      );
    }
  }
  await Promise.all(productUpdates);
}

async function createReviews(): Promise<void> {
  // Generate random reviews for transactions
  const reviews: Prisma.ReviewCreateManyInput[] = [];
  const transactionsList = await prisma.transaction.findMany();
  for (const transaction of transactionsList) {
    if (Math.random() > 0.5) {
      reviews.push({
        transactionId: transaction.id,
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
      });
    }
  }
  await prisma.review.createMany({ data: reviews });
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

/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `expiryDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backgroundPhotoUrl` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logoUrl` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delivered` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasStore` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_userId_fkey";

-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_brandId_fkey";

-- DropForeignKey
ALTER TABLE "StoreTag" DROP CONSTRAINT "StoreTag_storeId_fkey";

-- DropForeignKey
ALTER TABLE "StoreTag" DROP CONSTRAINT "StoreTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_storeId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "expiryDate",
DROP COLUMN "name",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "brandId",
ADD COLUMN     "backgroundPhotoUrl" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "logoUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "storeId",
ADD COLUMN     "delivered" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hasStore" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Brand";

-- DropTable
DROP TABLE "StoreTag";

-- DropTable
DROP TABLE "Tag";

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

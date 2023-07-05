/*
  Warnings:

  - You are about to drop the column `imagesUrls` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imagesUrls",
ADD COLUMN     "imagesUrl" TEXT[];

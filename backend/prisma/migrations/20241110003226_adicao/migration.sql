/*
  Warnings:

  - Added the required column `repetitions` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sets` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calories` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `food_name` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "repetitions" INTEGER NOT NULL,
ADD COLUMN     "sets" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "calories" INTEGER NOT NULL,
ADD COLUMN     "food_name" TEXT NOT NULL;

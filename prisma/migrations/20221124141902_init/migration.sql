-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'USER', 'CASHIER', 'CLIENT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Roles"[] DEFAULT ARRAY['USER']::"Roles"[];

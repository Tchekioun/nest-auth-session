-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "denomination" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "phoneNumber2" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Senior', 'Mid', 'Junior');

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "company" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "new" BOOLEAN NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "position" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "level" "Level" NOT NULL DEFAULT 'Junior',
    "postedAt" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "tools" TEXT[],

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lenguages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,

    CONSTRAINT "Lenguages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lenguages" ADD CONSTRAINT "Lenguages_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

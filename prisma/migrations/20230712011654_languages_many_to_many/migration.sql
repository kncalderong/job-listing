/*
  Warnings:

  - You are about to drop the column `jobId` on the `Language` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_jobId_fkey";

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "jobId";

-- CreateTable
CREATE TABLE "_JobToLanguage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JobToLanguage_AB_unique" ON "_JobToLanguage"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToLanguage_B_index" ON "_JobToLanguage"("B");

-- AddForeignKey
ALTER TABLE "_JobToLanguage" ADD CONSTRAINT "_JobToLanguage_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToLanguage" ADD CONSTRAINT "_JobToLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

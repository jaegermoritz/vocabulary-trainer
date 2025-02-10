-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "body" TEXT NOT NULL,
    "linkId" INTEGER NOT NULL,
    CONSTRAINT "Comment_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "priority" TEXT NOT NULL DEFAULT 'normal',
    "imagesJson" TEXT,
    "filesJson" TEXT
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "subject" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "imagesJson" TEXT,
    "filesJson" TEXT
);

-- CreateTable
CREATE TABLE "Direction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Succursale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "directionId" INTEGER,
    CONSTRAINT "Succursale_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "image" TEXT,
    "email" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "succursaleId" INTEGER NOT NULL,
    CONSTRAINT "Client_succursaleId_fkey" FOREIGN KEY ("succursaleId") REFERENCES "Succursale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Direction_email_key" ON "Direction"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Succursale_email_key" ON "Succursale"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Succursale_directionId_key" ON "Succursale"("directionId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_matricule_key" ON "Client"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

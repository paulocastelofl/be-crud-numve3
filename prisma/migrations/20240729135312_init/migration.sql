-- CreateTable
CREATE TABLE "TypePerson" (
    "id" SERIAL NOT NULL,
    "description" TEXT,

    CONSTRAINT "TypePerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypePerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

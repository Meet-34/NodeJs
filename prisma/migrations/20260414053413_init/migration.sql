-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "task_name" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

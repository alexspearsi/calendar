ALTER TABLE "user" RENAME COLUMN "John Doe" TO "name";--> statement-breakpoint
ALTER TABLE "user" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE integer;
import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669668040375 implements MigrationInterface {
    name = 'default1669668040375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("isbn" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "author" varchar NOT NULL, "coAuthro" text NOT NULL, "publishingCompany" varchar NOT NULL, "description" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "rent_books" ("id" varchar PRIMARY KEY NOT NULL, "responsable" varchar NOT NULL, "isbn" varchar NOT NULL, "data" date NOT NULL, "devolution" date NOT NULL, "status" varchar NOT NULL, CONSTRAINT "REL_4c304436db5ca898338ccec85c" UNIQUE ("isbn"))`);
        await queryRunner.query(`CREATE TABLE "libraries" ("id" varchar PRIMARY KEY NOT NULL, "category_id" varchar NOT NULL, "book_isbn" varchar NOT NULL, "amount" numeric NOT NULL, "description" text NOT NULL, CONSTRAINT "REL_54e5c7237baf75486051d87ba0" UNIQUE ("book_isbn"))`);
        await queryRunner.query(`CREATE TABLE "temporary_rent_books" ("id" varchar PRIMARY KEY NOT NULL, "responsable" varchar NOT NULL, "isbn" varchar NOT NULL, "data" date NOT NULL, "devolution" date NOT NULL, "status" varchar NOT NULL, CONSTRAINT "REL_4c304436db5ca898338ccec85c" UNIQUE ("isbn"), CONSTRAINT "FK_4c304436db5ca898338ccec85cb" FOREIGN KEY ("isbn") REFERENCES "books" ("isbn") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_rent_books"("id", "responsable", "isbn", "data", "devolution", "status") SELECT "id", "responsable", "isbn", "data", "devolution", "status" FROM "rent_books"`);
        await queryRunner.query(`DROP TABLE "rent_books"`);
        await queryRunner.query(`ALTER TABLE "temporary_rent_books" RENAME TO "rent_books"`);
        await queryRunner.query(`CREATE TABLE "temporary_libraries" ("id" varchar PRIMARY KEY NOT NULL, "category_id" varchar NOT NULL, "book_isbn" varchar NOT NULL, "amount" numeric NOT NULL, "description" text NOT NULL, CONSTRAINT "REL_54e5c7237baf75486051d87ba0" UNIQUE ("book_isbn"), CONSTRAINT "FK_54e5c7237baf75486051d87ba04" FOREIGN KEY ("book_isbn") REFERENCES "books" ("isbn") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_libraries"("id", "category_id", "book_isbn", "amount", "description") SELECT "id", "category_id", "book_isbn", "amount", "description" FROM "libraries"`);
        await queryRunner.query(`DROP TABLE "libraries"`);
        await queryRunner.query(`ALTER TABLE "temporary_libraries" RENAME TO "libraries"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "libraries" RENAME TO "temporary_libraries"`);
        await queryRunner.query(`CREATE TABLE "libraries" ("id" varchar PRIMARY KEY NOT NULL, "category_id" varchar NOT NULL, "book_isbn" varchar NOT NULL, "amount" numeric NOT NULL, "description" text NOT NULL, CONSTRAINT "REL_54e5c7237baf75486051d87ba0" UNIQUE ("book_isbn"))`);
        await queryRunner.query(`INSERT INTO "libraries"("id", "category_id", "book_isbn", "amount", "description") SELECT "id", "category_id", "book_isbn", "amount", "description" FROM "temporary_libraries"`);
        await queryRunner.query(`DROP TABLE "temporary_libraries"`);
        await queryRunner.query(`ALTER TABLE "rent_books" RENAME TO "temporary_rent_books"`);
        await queryRunner.query(`CREATE TABLE "rent_books" ("id" varchar PRIMARY KEY NOT NULL, "responsable" varchar NOT NULL, "isbn" varchar NOT NULL, "data" date NOT NULL, "devolution" date NOT NULL, "status" varchar NOT NULL, CONSTRAINT "REL_4c304436db5ca898338ccec85c" UNIQUE ("isbn"))`);
        await queryRunner.query(`INSERT INTO "rent_books"("id", "responsable", "isbn", "data", "devolution", "status") SELECT "id", "responsable", "isbn", "data", "devolution", "status" FROM "temporary_rent_books"`);
        await queryRunner.query(`DROP TABLE "temporary_rent_books"`);
        await queryRunner.query(`DROP TABLE "libraries"`);
        await queryRunner.query(`DROP TABLE "rent_books"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}

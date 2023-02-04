import { MigrationInterface, QueryRunner } from 'typeorm';

export class wallet1674458314475 implements MigrationInterface {
  name = 'wallet1674458314475';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "wallet" RENAME COLUMN "usd" TO "usds"`,
    );
    await queryRunner.query(`ALTER TABLE "wallet" DROP COLUMN "usds"`);
    await queryRunner.query(`ALTER TABLE "wallet" ADD "usds" double precision`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "wallet" DROP COLUMN "usds"`);
    await queryRunner.query(`ALTER TABLE "wallet" ADD "usds" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "wallet" RENAME COLUMN "usds" TO "usd"`,
    );
  }
}

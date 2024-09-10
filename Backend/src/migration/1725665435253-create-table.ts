import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1725665435253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE DATABASE LittleSichuan`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

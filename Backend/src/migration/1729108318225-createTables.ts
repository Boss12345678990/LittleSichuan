import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1729108318225 implements MigrationInterface {
    name = 'CreateTables1729108318225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`phoneNumber\` varchar(255) NOT NULL, \`totalPrice\` decimal NOT NULL, \`orderItems\` json NOT NULL, \`deletedAt\` datetime(6) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`orderId\` int NOT NULL, \`productId\` int NOT NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ordersId\` int NULL, \`productsId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`price\` decimal NOT NULL, \`photo\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product_order\` ADD CONSTRAINT \`FK_883448f79e97d310cec2ef38ebb\` FOREIGN KEY (\`ordersId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_order\` ADD CONSTRAINT \`FK_4868a04233d9fe1d086a6d5b76a\` FOREIGN KEY (\`productsId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_order\` DROP FOREIGN KEY \`FK_4868a04233d9fe1d086a6d5b76a\``);
        await queryRunner.query(`ALTER TABLE \`product_order\` DROP FOREIGN KEY \`FK_883448f79e97d310cec2ef38ebb\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`product_order\``);
        await queryRunner.query(`DROP TABLE \`order\``);
    }

}

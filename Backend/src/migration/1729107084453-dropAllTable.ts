import { MigrationInterface, QueryRunner } from "typeorm";

export class DropAllTable1729107084453 implements MigrationInterface {
    name = 'DropAllTable1729107084453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`SET FOREIGN_KEY_CHECKS = 0;`);

    // Drop the tables if they exist
        await queryRunner.query(`DROP TABLE IF EXISTS \`product_order\`;`);
        await queryRunner.query(`DROP TABLE IF EXISTS \`product\`;`);
        await queryRunner.query(`DROP TABLE IF EXISTS \`order\`;`);

        // Re-enable foreign key checks
        await queryRunner.query(`SET FOREIGN_KEY_CHECKS = 1;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`phoneNumber\` varchar(255) NOT NULL, \`totalPrice\` decimal NOT NULL, \`orderItems\` json NOT NULL, \`deletedAt\` datetime(6) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`orderId\` int NOT NULL, \`productId\` int NOT NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ordersId\` int NULL, \`productsId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`price\` decimal NOT NULL, \`photo\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product_order\` ADD CONSTRAINT \`FK_883448f79e97d310cec2ef38ebb\` FOREIGN KEY (\`ordersId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_order\` ADD CONSTRAINT \`FK_4868a04233d9fe1d086a6d5b76a\` FOREIGN KEY (\`productsId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

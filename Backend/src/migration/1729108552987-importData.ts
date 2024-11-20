import { MigrationInterface, QueryRunner } from "typeorm";
import csv from 'csvtojson';
export class ImportData1729108552987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const csvFilePath = "./src/database/seed-data.csv";
        const data = await csv().fromFile(csvFilePath);
        console.log(data);
        Promise.all(data.map(async (item) => {
            await queryRunner.manager.getRepository("product").save({name:item.item_name, description:item.item_desc, price:item.price, photo:item.photo, type:item.Type})
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

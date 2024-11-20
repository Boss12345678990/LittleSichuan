import "reflect-metadata"
import { DataSource } from "typeorm";
import Product from "./entity/Product";
import Order from "./entity/Order";
import ProductAndOrder from "./entity/product-order";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "boss05070507",
    database: "LittleSichuan",
    synchronize: false,
    logging: false,
    entities: [Product, Order, ProductAndOrder],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        return;
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });


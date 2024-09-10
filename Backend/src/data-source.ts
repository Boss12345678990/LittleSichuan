import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "LittleSichuan",
    synchronize: false,
    logging: false,
    entities: ['./src/entity/*.{js,ts}'],
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


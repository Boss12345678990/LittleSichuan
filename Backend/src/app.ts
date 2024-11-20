import "reflect-metadata";
import express from 'express';
import { AppDataSource } from './data-source';
import orderRouter from './routes/orderRoute';
import productRouter from './routes/productRoute';
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

AppDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!');
}).catch((error) => {  
  console.error('Error during Data Source initialization:', error);
});
app.use('/', productRouter);
app.use('/', orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
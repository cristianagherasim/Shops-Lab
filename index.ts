import express, {Application, Request, Response} from 'express';
import { itemRouter } from './routes';

const app:Application = express();
// const itemRepo = new ItemRepo();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", itemRouter);

app.listen(port, ():void => {
    console.log(`listening on port ${port}`);
});
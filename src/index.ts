import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8001;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
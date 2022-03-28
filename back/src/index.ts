import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import router from './routes'


const app: Express = express();
app.use(cors())
app.use(router)
const port = 3001

app.get('/', (request: Request, response: Response) => {
    response.send('Express + TypeScript Server');
  });
  
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });   
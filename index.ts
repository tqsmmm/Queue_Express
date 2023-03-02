import express, { Express, Router, Request, Response } from 'express';

const app: Express = express();

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
});

const router: Router = express.Router();

app.use('/api', router);

router.get('/login', async (req: Request, res: Response) => {});

app.listen(5000, () => {
    console.log('App running at: http://localhost:5000/');
});

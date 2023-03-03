import express, { Express, Router, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(
    cors({
        origin: ['http://localhost:5173'],
        // credentials: true,
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());

const router: Router = express.Router();

app.use('/api', router);

router.post('/login', async (req: Request, res: Response) => {
    console.log(req.body);

    if (req.body.user_id == 'admin' && req.body.user_pwd == 'admin') {
        res.json({
            code: 200,
            message: 'Success',
        });
    } else {
        res.json({
            code: 400,
            message: 'Error',
        });
    }
});

app.listen(5000, () => {
    console.log('App running at: http://localhost:5000/');
});

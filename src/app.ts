import express from 'express';
import cors from 'cors';
import { routes } from './routes'
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running at port ' + PORT));
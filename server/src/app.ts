import express from 'express';
import router from './routes/Posts.route';

const app = express();

app.use(express.json());

app.use("/api/v1/posts",router);

export default app;
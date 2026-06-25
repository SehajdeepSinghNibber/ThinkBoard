import express from 'express';
import router from './routes/Posts.route';
import rateLimiter from './middleware/rateLimiter';

const app = express();

app.use(express.json());

app.use(rateLimiter);

app.use("/api/v1/posts",router);

export default app;
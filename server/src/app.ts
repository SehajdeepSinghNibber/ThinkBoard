import express from 'express';
import router from './routes/Posts.route';
import rateLimiter from './middleware/rateLimiter';
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan";


const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use(helmet());

app.use(rateLimiter);

app.use("/api/v1/posts",router);

export default app;
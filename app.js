import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// import todoRouter from './todo/todo-router';

app.use(express.json());
////// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())
// app.use('/todos', todoRouter);

app.get('/', (req, res) => {
  res.send('SERVER RUNNING! Use appropriate route to run system.');
});

export default app;
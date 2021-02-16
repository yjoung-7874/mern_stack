import express from "express";
import mongoose from "mongoose";
import config from "./config";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// Routes
import postRoutes from "./routes/api/post"
import userRoutes from "./routes/api/user"

const app = express()
const { MONGO_URI } = config

// setup for security
app.use(hpp())
app.use(helmet())

app.use(cors({origin: true, credentials: true})) // help browser request resource to other domain
app.use(morgan("dev")) // logging

app.use(express.json()) // translate data in JSON format using bodyparser included in express

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connecting Success!!"))
  .catch((e) => console.log(e));

// use routes
app.get('/')
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes)

export default app;

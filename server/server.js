import express from 'express';
import cors from 'cors'
import {corsOptions} from './middleware/corsOptions.js';

const app = express();


//middlewares   
app.use(express.json());
app.use(cors()); //app.use(cors(corsOptions));

//start the server
const port = 4000
app.listen(port, () => console.log(`listening on port ${port}....`));

//import routers
import adminRoute from './routes/adminRouter.js'
import authRoute from './routes/authRouter.js'
import serviceRoute from './routes/serviceRouter.js'
import userRoute from './routes/userRouter.js'
app.use("/api",adminRoute);
app.use("/api",authRoute);
app.use("/api",serviceRoute);
app.use("/api",userRoute);
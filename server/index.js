import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoute.js"
import dalleRoutes from "./routes/dalleRoute.js"

const app=express();
app.use(cors())
dotenv.config()
app.use(express.json({limit:'50mb'}))

app.use("/api/v1/post",postRoutes);
app.use("/api/v1/dalle",dalleRoutes);


const startServer=async ()=>{
    try{
        connectDB(process.env.MONGO_DB_URL);
        app.listen("8080",()=>{
            console.log("server is connected at port 8080");
        });
    }catch(e){
        console.log("error from index.js",e)
    }
}
startServer();
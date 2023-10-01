import mongoose from "mongoose"


const connectDB=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url).then(()=>{
        console.log("app connected with mongo db")
    }).catch((e)=>{
        console.log("something went wrong",e)
    })
}
export default connectDB;
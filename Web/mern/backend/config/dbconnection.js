import mongoose from "mongoose";

try{
    await mongoose.connect(
        "mongodb+srv://shoibk897:TS0Id8De0TS4m9Ma@cluster0.hogqx.mongodb.net/classprojectdb"
    )
    console.log("Database connection success !");
    
} catch (error){
    console.error("DB connection failed",error);
}

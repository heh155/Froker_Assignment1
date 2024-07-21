import mongoose from "mongoose";

const bookSchema=mongoose.Schema(
    {
        titleImg:{
            type:String,
            require:true,
        },
        author:{
            type:String,
            require:true,
        },
        title:{
            type:String,
            require:true,
        },
        description:{
            type:String,
            require:true,
        },
    },
    {
        timestamps:true
    }
);

export const Book=mongoose.model("User",bookSchema);
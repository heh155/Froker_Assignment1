import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/user.js';
import cors from 'cors'

const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017",{
    dbName:"froker"
}).then(()=>console.log("db connected"))
.catch((e)=>console.log(e))

app.get("/", async (req, res) => {
    try {
      const users = await Book.find({});
      res.json({
        success: true,
        users: users
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({
        success: false,
        error: "Error fetching users"
      });
    }
  });

app.post("/frokerpage",async(req,res)=>{
    const {titleImg,author,title,description}=req.body

    await Book.create({
        titleImg,
        author,
        title,
        description
    });
    res.json({
        success:true,
        msg:"registered"
    })
})


app.listen(4000,()=>{
    console.log("server is running")
})
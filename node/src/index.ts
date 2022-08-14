const mongoose = require("mongoose");
const express = require("express");
const app = express();
import cors from "cors";
import FriendModel from "./models/Friends";
app.use(cors());
app.use(express.json());
// add friends
app.post("/addfriend",async (req,res)=>{
  const name=req.body.name;
  const age=req.body.age;
  const friend=new FriendModel({name:name,age:age});
  await friend.save();
  res.send(friend);
})
//update friends
app.put("/updatefriend/:id",async (req,res)=>{
  const id=req.params.id;
  const name=req.body.name;
  const age=req.body.age;
  const friend=await FriendModel.findByIdAndUpdate(id,{name:name,age:age}, {new:true});
  res.send(friend);
})
//delete friends
app.delete("/deletefriend/:id",async (req,res)=>{
  const id=req.params.id;
  const friend = await FriendModel.findByIdAndDelete(id);
  res.send(friend);
})

// get all friends
app.get("/read", async (req, res) => {
   FriendModel.find({},(err,result)=>{
      if(err) {
        res.send(err)
      }else{
        res.send(result)
      }
   });
});

// //insert friends
// app.get("/insert", async (req, res) => {
//   const friend = await FriendModel.create({
//     name: "abidi",
//     age: 20,
//     description: "cool",
//   });
//   return res.send(friend);
// });

// connect to mongoose
mongoose
  .connect(
    "mongodb+srv://ghassen9876:azerty@cluster0.btscbyi.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    //run server
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  });

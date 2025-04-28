const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("your setup is working fine ");
})

app.listen(5000);
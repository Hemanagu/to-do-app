const express=require("express");

const PORT=8000;

const app=express();

app.set("view engine","ejs");

app.listen(PORT,()=>{
    console.log(`conected successfully and server running on port ${PORT}`);
}
);
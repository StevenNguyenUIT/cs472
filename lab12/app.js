const express = require("express");
const path = require("path");
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");


//instantiation
const app = express();

//configuration
app.enable("case sensitive routing");


// Middlewares

//built-in 
app.use(express.static("./public"));

//routing
app.use("/products",productRouter);
app.use("/users",userRouter);


//application level 

app.use('/asdf',(req,res,next)=>{
    res.status(404).sendFile("./view/404.html", { root: "./public" });    
});


// error handling
app.use('/err',(err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


//Bootup
app.listen(3000, ()=>{
    console.log('Your server is running on 3000');
})
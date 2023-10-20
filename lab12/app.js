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

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile("./view/404.html", { root: "./public" });    
});
  
// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('500 - Internal Server Error');
});


//Bootup
app.listen(3000, ()=>{
    console.log('Your server is running on 3000');
})
const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log(req.url);
    res.status(200).sendFile("./view/product.html", { root: "./public" });    
    // res.send("Routing"+ req.method);
})

router.post('/', express.urlencoded({extended:false}),(req,res,next)=>{
    console.log(req.url);
    res.send("Routing "+ req.method + " "+req.body);
})

module.exports = router;


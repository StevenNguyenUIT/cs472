const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log(req.url);
    res.status(200).sendFile("./view/user.html", { root: "./public" });    
    // res.send("Routing"+ req.method);
})

router.post('/', express.urlencoded({extended:false}),(req,res,next)=>{
    console.log(req.query);
    res.send(req.query);
})

module.exports = router;
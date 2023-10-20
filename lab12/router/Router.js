const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    // throw new Error("woops error");
    // next('err')
    console.log("Routing"+ req.method);
    res.send("Routing"+ req.method);
})


router.post('/',express.urlencoded({extended:false}),(req,res,next)=>{
    console.log("Routing"+ req.method);
    res.send("Routing "+ req.method + " "+req.body);
})

router.delete('/',(req,res,next)=>{
    console.log(req.url + req.method);
    res.send(req.url + req.method);
})

router.put('/',(req,res,next)=>{
    console.log(req.url + req.method);
    res.send(req.url + req.method);
})


module.exports = router;
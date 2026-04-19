    const express = require("express");


    const {authenticateToken} = require("../middleware/authMiddleware");
    const add = require ("../controllers/recipeController")

    const upload = require ("../middleware/upload");

    const router = express.Router();

    router.post("/",authenticateToken,(req,res)=>{
        try{
            add(req,res);
        }
        catch(err){
            res.json({"message" : err.message});
        }
    })

    

    router.post("/client/myKitchen/add",authenticateToken,upload.single("image"),(req,res)=>{
        try{
            
            req.body.image = req.file.path;
            add(req,res);
        }
        catch(err){
            res.json({"message" : err.message});
        }
        
        
    })

        
    module.exports = router;
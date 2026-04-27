    const express = require("express");

    const {authenticateRole} = require("../middleware/authorizeRole");
    const {authenticateToken} = require("../middleware/authMiddleware");
    const {add,getRecipe} = require ("../controllers/recipeController")

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

    

    router.post("/client/myKitchen/add",authenticateToken,upload.single("image"),async (req,res)=>{
        try{
            console.log("hello")
            const state = req.user.role === "admin" ? "public" : "private";
            console.log(state)
            const user = req.user;
            console.log(user.username)
            req.body.image = req.file.path;
            await add(req,res,state);
        }
        catch(err){
            res.json({"message" : err.message});
        }
        
        
    })

    router.post("/client/mykitchen",authenticateToken,authenticateRole,async (req, res) =>{
        try{
        const user = req.user;
        
        const category = req.body.category
        const state = user.role === "admin" ? "public" : "private";
        await getRecipe(req, res, user, category, state);
        }
        catch(err){
            res.json({"message" : err.message});
        }
        
    })
        
    module.exports = router;
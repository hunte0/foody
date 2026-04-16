    const express = require("express");
    const {register,login,logout} = require("../controllers/authController");
    const {authenticateToken} = require("../middleware/authMiddleware");
    const {isCorrectUsername,isCorrectRole} = require ('../validators/VerifInput')
    const {refreshing} = require ("../controllers/authRefresh");
    const { ExpressValidator} = require('express-validator');
    const {checkErrors} = require('../middleware/checkErrors')
    const router = express.Router();
    const {body} = new ExpressValidator({isCorrectUsername,isCorrectRole});
    

    router.post("/register",body('username').isCorrectUsername(),body('email').isEmail()
    ,body('password').isLength({min : 8})
    ,body('role').isCorrectRole()
    ,checkErrors, register);
    router.post("/login", login);
    router.post ("/refresh",refreshing)
    router.post ("/logout",authenticateToken,logout);
    

    
    
    module.exports = router;
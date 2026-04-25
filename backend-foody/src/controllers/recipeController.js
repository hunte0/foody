const db = require ("../config/db")


const  add = async (req,res,state) =>{  
    try{

        const recipe = req.body;
        if (!recipe.preparation_time || !recipe.preparation_time || !recipe.preparation_method){
            recipe.preparation_time = "0";  
            recipe.serving = "0";
            recipe.preparation_method = "my recipe";
        }
        console.log(req.user.username)
        const [user] = await db.query("SELECT id FROM users WHERE username = ?", [req.user.username]);
        const userId = user[0].id;
        

        const [result] = await db.query ("INSERT INTO recipes (image,title,category,preparation_method,preparation_time,difficulty,serving,brief_description,user_id,state) values (?,?,?,?,?,?,?,?,?,?)",
            [recipe.image,recipe.recipe_name,recipe.category,recipe.preparation_method,Number(recipe.preparation_time),recipe.difficulty,Number(recipe.serving),recipe.brief_description,userId,state])
        const recipeId = result.insertId;
        const ingredients = JSON.parse(req.body.ingredients);
        for (const item of ingredients){
            console.log(item)
            const [row] = await db.query ("SELECT id_ingredient from ingredient where name = ?",[item.name])
            console.log(row[0].id_ingredient)
            const id = row[0].id_ingredient;
            await db.query("INSERT INTO recipe_ingredient (recipe_id, ingredient_id, quantity, unit) values (?,?,?,?)",
            [recipeId, id, item.quantity, item.unit])
                
        }
        res.status(201).json({"message" : "recipe added"});

    }
    catch (err) {
        res.status(500).json({"message" : err.message})
    }
}


const getRecipe = async (req, res, user, cat,state) =>{
    try{
        cat = cat.toLowerCase()
        if (state == 'admin') {
             if (cat === 'all') {
                const [rows] = await db.query("SELECT * from recipes where state = ?  ",[state])
                const recipes = rows.map((item) => {
                const clean = item.image
                    .replace(/\\/g, "/")        
                    .replace(/^uploads\//, ""); 

                return {
                    ...item,
                    imageurl: `http://localhost:5000/uploads/${clean}`
                };
                });
                res.status(200).json({message :"data selected", recipes})
            }
            else{
                const [rows] = await db.query("SELECT * from recipes where category = ? and state = ? ",[cat,state])
                const recipes = rows.map((item) => {
                const clean = item.image
                    .replace(/\\/g, "/")        
                    .replace(/^uploads\//, ""); 

                return {
                    ...item,
                    imageurl: `http://localhost:5000/uploads/${clean}`
                };
                });
                res.status(200).json({message :`data selected with ${cat}`, recipes})
            }
        }
        else{
            console.log("i entred")
            
            console.log(user.username)
            const [[idrow]] = await db.query("SELECT id from users where username = ?",[user.username])
            if (!idrow) {
                return res.status(404).json({ message: "User not found" });
            }
            const id = idrow.id
            console.log(id) 
            if (cat === 'all') {
                const [rows] = await db.query("SELECT * from recipes where user_id = ?  and state = ?",[id,state])
                const recipes = rows.map((item) => {
                const clean = item.image
                    .replace(/\\/g, "/")        
                    .replace(/^uploads\//, ""); 

                return {
                    ...item,
                    imageurl: `http://localhost:5000/uploads/${clean}`
                };
                });
                res.status(200).json({message :"data selected", recipes})
            }
            else{
                const [rows] = await db.query("SELECT * from recipes where user_id = ? and category = ? and state = ? ",[id,cat,state])
                const recipes = rows.map((item) => {
                const clean = item.image
                    .replace(/\\/g, "/")        
                    .replace(/^uploads\//, ""); 

                return {
                    ...item,
                    imageurl: `http://localhost:5000/uploads/${clean}`
                };
                });
                res.status(200).json({message :`data selected with ${cat}`, recipes})
            }
        }
    }
    catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
    }
   
module.exports = {add,getRecipe};
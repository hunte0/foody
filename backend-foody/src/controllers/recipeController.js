const db = require ("../config/db")


const  add = async (req,res) =>{
    try{

        const recipe = req.body;
        if (!recipe.preparation_time || !recipe.preparation_time || !preparation_method){
            recipe.preparation_time = "0";  
            recipe.serving = "0";
            recipe.preparation_method = "my recipe";
        }
        const [user] = await db.query("SELECT id FROM users WHERE username = ?", [req.user.username]);
        const userId = user[0].id;

        const [result] = await db.query ("INSERT INTO recipes (image,title,category,preparation_method,preparation_time,difficulty,serving,brief_description,user_id) values (?,?,?,?,?,?,?,?,?)",
            [recipe.image,recipe.recipe_name,recipe.category,recipe.preparation_method,Number(recipe.preparation_time),recipe.difficulty,Number(recipe.serving),recipe.brief_description,userId])
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

module.exports = add;
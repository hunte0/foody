const db = require ("../config/db")


const  add = async (req,res) =>{
    try{

        const recipe = req.body;
        
        const [result] = await db.query ("INSERT INTO recipes (image,title,description,category,preparation_method,preparation_time,difficulty,serving,brief_description) values (?,?,?,?,?,?,?,?,?)",[recipe.image,recipe.title,recipe.description,recipe.category,recipe.preparation_method,recipe.preparation_time,recipe.difficulty,recipe.serving,recipe.brief_description])
        const recipeId = result.insertId;
        for (const item of recipe.ingredients){
            const [row] = await db.query ("SELECT id from ingredient where name = ?",[item.name])
            const id = row[0].id;
           await db.query("INSERT INTO recipe_ingredient (recipe_id, ingredient_id, quantity, unit) values (?,?,?,?)",
            [recipeId, id, item.quantity, item.unit])
            
        }
        res.status(201).json({"message" : "recipe added"});

    }
    catch (err) {
        res.json({"message" : err.message})
    }
}

module.exports = add;
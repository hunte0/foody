const db = require("../config/db");

const search = async (req,res) =>{
    console.log("fuckme")
    const  sear  = req.body.search;
    const searchint =`%${sear || ''}%`;
    const [rows] = await db.query("SELECT name FROM ingredient where name LIKE ? LIMIT 10",[searchint])

    res.json(rows);
}
module.exports = search;
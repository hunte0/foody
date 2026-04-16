const {jwtVerify} = require("jose");

async function authenticateToken (req,res,next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }
  try{
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const {payload} = await jwtVerify(token,secret);
    req.user = payload;
    next();


  }
  catch (err){
        return res.status(403).json({message : err.message});
  }

}




module.exports = {authenticateToken}
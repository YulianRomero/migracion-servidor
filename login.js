const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const router = express.Router();

const users = [
    { email: "daniela@adaschool.com",  paswword: "daniela56",  name: "daniela", rol: "admin" },
    { email: "juana@adaschool.com",password: "juana1123", name: "juana", rol: "user" },
    { email: "arturo@adaschool.com", password: "arturo9123", name: "arturo", rol: "admin" },
    { email: "ferley@adaschool.com", password: "ferley1102", name: "ferley", rol: "invitado" },
  ];

  function JWTValidation(req, res, next){
    const tokenHeader = req.headers.authorization;
  
        jwt.verify(tokenHeader, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
           res.status(401).json({ err });
        }
        const {rol} = decoded;
          req.headers = { ...req.headers, rol}; 
        next();
      });
  }
  
router.post('/', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const user = users.find((item)=>item.email === email && item.password === password);
  
    if(!user) return res.status(401).json({ error: "Invalid user name or password" });
    const token = jwt.sign(user, process.env.SECRET_KEY, {algorithm:'HS256'});
    res.json({ token });
})

router.get('/profile', JWTValidation, (req, res)=>{
    const {rol} = req.headers;
    if(rol === 'admin'){
      res.send("Bienvenido Administrador");
    }else if(rol === 'user'){
        res.send("Bienvenido Usuario");
    }else{
        res.send("Bienvenido Invitado");
    }
    res.status(403).json({ error: "Access not allowed" })
})

module.exports = router;
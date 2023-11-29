// import ActualiteRoute from './routes/ActualiteRoute.js';
// import ConseilRoute from './routes/ConseilRoute.js';
import FileUpload from "express-fileupload";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
import cors from 'cors';
dotenv.config();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'brera_dph'
})
db.connect(function(err) {
    if(err) {
        console.log("Error in Connection");
    } else {
        console.log("Connecter a la base de donnee");
    }
})

const app = express();
app.get('/', (req, res) => {
    res.send('backend!');
  });
app.use(express.json());
app.use(cookieParser());
app.use(FileUpload());
app.use(express.static('public'))
app.use(cors(
    {
        // origin: ['header'],
        origin: '*',
        methods: ['POST', 'GET', 'DELETE', 'PUT'],
        credentials: true
        // allowedHeaders: ['*'],
    }
));
// app.use(ActualiteRoute);
// app.use(ConseilRoute);




const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Message: "vous avez besoin du token."})
    } else {
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded)=>{
            if(err) {
                return res.json({Message: "Erreur d'authentification"})
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get("/",verifyUser, (req, res) => {
    return res.json({Status: "succes", name: req.name})
})

// login
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json({Message: "Erreur de serveur!"});
        if(data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn: "1d"});
            res.cookie("token", token);
            return res.json({Status: "succes"})
        } else {
            return res.json({Message: "cet utilisateur n'existe pas"});
        }
    })
})
// logout
app.get("/logout", (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "succes"})
})

// Page acceuille
app.post("/pub", (req, res) =>{
    const sql = "INSERT INTO page_acceuille (`pub`) VALUES (?)";
   
    db.query(sql, [ req.body.pub], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

// afficher les donnes de la table pub_acceuille
app.get("/pub", (req, res)=>{
    const sql = "SELECT * FROM page_acceuille";
    db.query(sql, (err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data)
        }
    })
})

//supprimer la pub
app.delete("/pub/:id", (req, res) =>{
    const sql = "DELETE FROM page_acceuille WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

// newsletter
app.post("/newsletter", (req, res) =>{
    const sql = "INSERT INTO newsletter (`email`) VALUES (?)";
   
    db.query(sql, [ req.body.email], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

// afficher les donnes de la table newsletter
app.get("/newsletter", (req, res)=>{
    const sql = "SELECT * FROM newsletter";
    db.query(sql, (err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data)
        }
    })
})

//supprimer un email
app.delete("/newsletter/:id", (req, res) =>{
    const sql = "DELETE FROM newsletter WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

//supprimer un CONSEIL
app.delete("/conseil/:id", (req, res) =>{
    const sql = "DELETE FROM crudconseils WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})


app.listen(3000, () => {
    console.log("Démarrage de mon serveur sur le port 3000")
})

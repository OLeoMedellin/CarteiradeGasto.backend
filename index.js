import mysql from "mysql";
import express from "express";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"carto"

});

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(cors());

app.get("/", (req, res) => {
    res.json("estas no backend")
});


app.get("/entrada", (req, res)=>{
    const q = "SELECT * FROM entrada"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/saida", (req, res)=>{
    const q = "SELECT * FROM saida"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8800,() => {
    console.log("servidor rodando em: http://localhost:3000")
})
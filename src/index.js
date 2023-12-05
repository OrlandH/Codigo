
const express = require('express')
const app = express()
const port =3000

app.get("/", (req,res) =>{
    res.send("Landing Page")
})


app.get("/dashboard", (req,res) =>{
    res.send(`Bienvenido -Usuario`)
})




app.listen(port)

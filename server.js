require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
let scientists = []


// Middleware
app.use(express.urlencoded({extended: true}))

// Index Route
app.get("/planet", (req, res) => {
    res.render('index.ejs', {
        scientists
    })
})

// New Route
app.get("/planet/new", (req, res) => {
    res.render("new.ejs")
})

// Create Route
app.post("/planet", (req, res) => {
    scientists.unshift(req.body)
    console.log(scientists)
    res.redirect("/planet")
})

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})
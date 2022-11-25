require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const methodOverride = require('method-override')
const scientists = require('./models/planet.js')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

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

// Delete Route
app.delete("/planet/:id", (req, res) => {
    scientists.splice(req.params.id, 1)
    res.redirect("/planet")
})

// Delete Everything Route
app.delete("/planet", (req, res) => {
    scientists.splice(0, scientists.length)
    res.redirect("/planet")
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
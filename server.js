require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT


// Middleware
app.use(express.urlencoded({extended: true}))

// New Route
app.get("/planet/new", (req, res) => {
    res.render("new.ejs")
})

// Create Route

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");

// public static path
const static_path= path.join((__dirname),"../public");
const template_Path = path.join(__dirname,"../template/views");
const partials_Path =path.join(__dirname,"../template/partials");
app.set('view engine', 'hbs');
app.set("views",template_Path)
hbs.registerPartials(partials_Path);
 app.use(express.static(static_path));
// routing
app.get("/",(req,res)=>{
    res.render("index.hbs");
})

app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log("listening to port", port);
});
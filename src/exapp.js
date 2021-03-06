const express = require("express");
require( "../src/db/conn");
const User = require("../src/models/usrinp")
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 4000;

// Define path

const staticpath = path.join(__dirname , "../public");
const temppath = path.join(__dirname , "./templates/views");
const parpath = path.join(__dirname , "/template/partioal");
const cspath = path.join(__dirname , "../public/scss");
const imgpath = path.join(__dirname , "../public/images");


console.log(path.join(imgpath));



// Set 
app.use(express.urlencoded({extended:false}));
app.use('/img',express.static(imgpath));
app.use('/css',express.static(cspath));
app.use(express.static(staticpath));
app.set("view engine" , "hbs");
app.set("views" , temppath)
hbs.registerPartials(parpath);



//Route


app.get("/" , (req , res) =>
{

    res.send("Home");
});


app.get("/weather" , (req , res) =>
{

    res.send("Weather");
});



app.get("/About" , (req , res) =>
{

    res.send("About");
});


app.get("/contact" , (req , res) =>
{

    res.send("contact");
});

app.post("/contact" , async(req , res) =>
{
try{
 const userdata = new User(req.body);
 await userdata.save();
 res.status(201).send("contact");

}
catch(error){
res.status(500).send(error);
}
    
});




app.get("*" , (req , res) =>
{

    res.send("Error");
});




app.listen(port , (req , res) =>
{

    console.log(`Server is running ${port}`);
})

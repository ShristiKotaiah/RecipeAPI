require("dotenv").config();
const express = require("express");
const connectDB = require("./db/dbConnect");


const app = express();
const port = process.env.PORT || 5000;


const recipes_routes = require("./routers/recipe_new");

app.get("/",(req,res)=>{
    res.send("Hi I am live");
});

//middleware to set router
app.use("/api/recipes",recipes_routes);


app.use(express.json());



const start = async()=>{
    try{
        await connectDB(process.env.DB);
        app.listen(port,()=>{
            console.log(`Connection is live at port no. ${port}`);
        });
        
    }catch(e){
        console.log(e);
    }
};

start();


require("dotenv").config();
const connectDB = require("./db/dbConnect");

const RecipeSchema = require("./models/schema");

const RecipeJson = require("./recipes_data.json");

const start = async() =>{
    try{
        await connectDB(process.env.DB);
        await RecipeSchema.deleteMany();
        await RecipeSchema.create(RecipeJson);
        console.log("success");
    }catch(e){
        console.log(e);
    }
};

start();
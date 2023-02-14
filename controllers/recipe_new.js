const Recipe = require("../models/schema");

const getAllRecipes = async(req,res)=>{
    const {Recipe_Name,Recipe_Ingredient,sort,select}=req.query;
    const queryObject = {};

    if(Recipe_Name){
        queryObject.Recipe_Name = {$regex:Recipe_Name, $options: "i"};
    }

    if(Recipe_Ingredient){
        queryObject.Recipe_Ingredient = {$regex:Recipe_Ingredient, $options: "i"};
    }

    let apiData = Recipe.find(queryObject);

    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }
    else{
        apiData = apiData.sort("Recipe_Id");
    }

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    else{
        apiData = apiData.select("Recipe_Name Recipe_Ingredient Available Not_Available Total_CF");

    }


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.list) || 10;

    let skip = (page -1)*limit;



    const Recipe_Data = await apiData.skip(skip).limit(limit);
    res.status(200).json({Recipe_Data,nbHits:Recipe_Data.length});
};




const getAllRecipesTesting = async(req,res)=>{
    res.status(200).json({msg: 'I am getAllRecipesTesting'});
};

module.exports = {getAllRecipes,getAllRecipesTesting};


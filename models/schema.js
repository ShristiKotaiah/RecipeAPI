const mongoose = require("mongoose");
const express = require("express");

const Schema = new mongoose.Schema({
    Recipe_Id:{type:Number,required:true,
    unique:true},
    Recipe_Name:{type:String,required:true},
    Recipe_Ingredient:{type:String,required:true},
    Total_Ingredient:{type:Number,required:true},
    Available:{type:String,required:true},
    Available_Ingredient:{type:Number,required:true},
    Not_Available:{type:String,required:true},
    Not_Available_Ingredient:{type:Number,required:true},
    Available_percentage:{type:Number,required:true},
    Total_CF:{type:Number,required:true}
});



module.exports = mongoose.model("Recipe",Schema);


//create Item schema which is going to store in mongodb.includes all the attributes that neededed to store in a Item

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({

Item :{
    type:String,
    require:true
},

Priority:{
    type :String,
    require:true
},

exHours :{
    type:Number,
    require:true
},

state:{
    type:String,
    require:true,
    default:"Todo"
    
}


})

const item = mongoose.model('item',ItemSchema); //model the item schema in the mongodb item collection
module.exports=item;
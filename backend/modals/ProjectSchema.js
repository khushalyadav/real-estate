const mongoose=require('mongoose');

const ProjectSchema= new mongoose.Schema({
     propertyName:String,
     address:String,
     price:Number,
     about:String,
})

module.exports= mongoose.model('project',ProjectSchema);


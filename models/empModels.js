const mongose=require('mongoose')
const empschema=new mongose.Schema({
    empid:Number,
    empname:String
})
const empmdl=mongose.model('empmodel',empschema)
module.exports=empmdl;
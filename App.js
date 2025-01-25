const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const { getDatabase } = require('./db');
//const objdbo = dbo.objectId
//const { ObjectId } = require('mongodb');
const empmodel = require('./models/empModels');
const dbo = require('./db');
dbo.getDatabase();



/* Create an instance of express */
const app = express();


//this tells about what kind of data and how the data is sent to the server
/*
first parameter is the type of data you want to send
second parameter is the middleware function
in that tells where the html file is located about like what folder and name of the file and extension of the file is mentioned as 'hbs

*/
app.engine('hbs',
    exhbs.engine({
        layoutsDir:'viewsfold',
        defaultLayout:'main',
        extname:'hbs'}));


app.set('view engine', 'hbs');
app.set('views', 'viewsfold');
app.use(bodyParser.urlencoded({extended: true}));




app.get('/', async(req, res) => {
    //let database = await dbo.getDatabase();
    //const collection =  database.collection('emp')
    //await collection.insertOne({empid: 1, empname: 'Rohit'});
    //const cursor = collection.find({});
    //let datas = await cursor.toArray();
    let msg = '';
    let edit_id = '';
    let edit_emp = '';
    let  datas ='';
    
    if(req.query.edit_man){
        edit_id = req.query.edit_man;
        edit_emp = await collection.findOne({ _id: new objdbo(edit_id) })
    }


    if(req.query.delete_man){
        delete_id = req.query.delete_man;
        console.log('Delete request for the id: ',delete_id);
        await collection.deleteOne({ _id: new objdbo(delete_id) });
        res.redirect('/?status=3')
    }

    if(req.query.status === '2'){
        msg = 'Data Updated Successfully';
    }


    if(req.query.status === '1'){
        msg = 'Data Inserted Successfully';
    }
    if(req.query.status === '3'){
        msg = 'Data Deleted Successfully';
    } 
    
    res.render('main', { msg ,datas,edit_id,edit_emp});
})




app.post('/empinfo',async(req,res) => {
   // const database = await dbo.getDatabase();
    //const collection = database.collection('emp');
    const employee = {empid : req.body.eid, empname : req.body.ename};
    const newempl= new empmodel(employee)
    newempl.save();
    //await collection.insertOne(employee);
    res.redirect('/?status=1')
});



app.post('/updateinfo/:id',async(req,res)=>{
    const database =await dbo.getDatabase();
    const collection = database.collection('emp');
    const employee = {empid : req.body.eid,empname: req.body.ename};
    let id = req.params.id;
    await collection.updateOne({_id:new objdbo(id)},{$set:employee});

    res.redirect('/?status=2');
})



// For delete option







app.listen(8000, () =>{
    console.log('Listening on port 8000...');
    
        console.log('Server is running...');
    
})
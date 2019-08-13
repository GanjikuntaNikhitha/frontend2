var  express = require('express')
var app = express()
require('./server/src/db/mongoose')

const User = require('./server/src/models/user')
const Task = require('./server/src/models/task')
const port = process.env.PORT || 3002

app.use(express.json())
var routes = require("./routes.js")(app);
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname, '', '/src/controller/controller.js' ));




app.post('/addData', (req, res) => {


    var user = new User(req.body)
           
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)

       
 })
})
  


app.post('/addData', (req, res) => {
 
    var query = {$or:[{name:req.body.name}, {email:req.body.email}]};
    
    User.findOne(query, function(err, data){

       
        if(err){
            res.status(400).send(err)
        }else if(data  && data.name == req.body.name){
            res.status(400).send('Name is already exists')
        }else if(data  && data.email == req.body.email){
            res.status(400).send('Email is already exists')
        }else{
            // res.status(200).send('sucess')
            var user = new User(req.body)
           
            user.save().then(() => {
                res.send(user)
            }).catch((e) => {
                res.status(400).send(e)
        
               
         })

        }
    })
})
var server = app.listen(port, function () {

    console.log("server listening at port : %s", server.address().port);
})
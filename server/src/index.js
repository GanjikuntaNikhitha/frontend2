const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3004

app.use(express.json())





// app.post('/addData', (req, res) => {


//     var user = new User(req.body)
           
//     user.save().then(() => {
//         res.send(user)
//     }).catch((e) => {
//         res.status(400).send(e)

        
//  })
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
// password : Hkf8ApUfGoD7ESCO

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const routes = require('./routes/bookroutes')
const cors = require('cors');

// middlewares


app.use(express.json());
app.use(cors());
app.use('/books', routes);



mongoose.connect('mongodb+srv://neerajmjoshi1:Hkf8ApUfGoD7ESCO@cluster0.oa6bvo4.mongodb.net/newlimanagement?retryWrites=true&w=majority')
.then( () => {

    console.log('connnected')

})
.then(() => {

    app.listen(5000, () => {

        console.log(`listening on http://localhost:5000`);

    })

})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(express.json());
app.use(cors());


app.use('./api', userRoutes)

mongoose.connect('mongodb://localhost:27017/Users')   //Users is database name
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error("MongoDB connection error:",err));

app.use('/user',userRoutes);    //filename or route
app.listen(5000, () => console.log( "Server running on port"));

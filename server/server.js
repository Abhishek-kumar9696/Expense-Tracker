const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require("./config/connectDb.js");
const userRoute = require('./routes/userRoutes')
const path = require('path')
 

//config dot env file 
dotenv.config();
//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//routes
app.get('/', (req,res) =>{
    res.send("<h1>Hello From Server</h1>");
})

//user routes

const PORT = 8082 || process.env.PORT
app.use('/api/v1/users', userRoute)
 
//transections routes
app.use("/api/v1/transections",require("./routes/transectionRoutes"));
//port



// for deployment
app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

    //end deployment




//listening
app.listen(PORT,() =>{
    console.log(`Server Running On Port ${PORT}`)
})

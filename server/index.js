import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import homeRoute from './routes/home.js'

const app = express();

app.use('/home', homeRoute)

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://XicBeC0SjCRoELMT:XicBeC0SjCRoELMT123@cluster0.uohou.mongodb.net/AguasCartagena?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error)=>console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false)
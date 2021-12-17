import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/user.js';

// Initialization
const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/post',postRoutes); //Todo va a iniciar con la ruta post creo

// DB connection
const CONNECTION_URL = 'mongodb+srv://XicBeC0SjCRoELMT:XicBeC0SjCRoELMT123@cluster0.uohou.mongodb.net/AguasCartagena?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
//mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')});
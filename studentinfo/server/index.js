import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/student.js';



const app = express();
app.use(cors());




app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

app.use('/students', router)



const CONNECTION_URL = 'mongodb+srv://uday:uday123@cluster0.akajlyw.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(()=> app.listen(PORT,()=>
    console.log(`connection is established and running on Port: ${PORT}`)
)).catch((err)=> console.log(err.message));




const express =  require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config()
app.use(cors());

app.use(bodyParser.json());

const itemRoutes = require('./routes/item_routes');

const PORT =process.env.PORT ||8010
const URL = process.env.MONGODB_URL;


mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,

})

const connection =mongoose.connection;

connection.once("open",()=>{
    console.log("Mongo DB Connection success");
})

app.route('/').get((req,res)=>{
    res.send('Concon');
})

app.use('/item',itemRoutes)

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
});

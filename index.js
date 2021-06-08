// MODULES
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//ROUTE IMPORTS
import routes from './routes/routes.js';

// SETUP
const app = express(); //setting up Express

// MIDDLEWARES
app.use('/', routes); //setting up the /list route to point to routes.js '/'
app.use(express.json({ limit: "30mb", extended: true })); //for json parsing, the limit is for the images
app.use(express.urlencoded({ limit: "30mb", extended: true })); //for url parsing, the limit is for the images
app.use(cors()); //adding cors, make sure it's above the routes/middlewares

// DB Connection with mongoose
const CONNECTION_URL = "mongodb+srv://jarganytar:jarganytar2021@jarganytar.znydn.mongodb.net/Jarganytar?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
.then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
    .catch( (error) => console.log(error.message));
mongoose.set('useFindAndModify', false); //disabling console warnings
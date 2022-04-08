import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'; // 

const app = express();

app.use('/posts', postRoutes);  // Using express.js middleware. I'm setting up the starting path for all routes inside posts.js.

//General Setup for bodyParser to send HTTP requests.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://Godzilla:godzilla123@cluster0.j1xll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${ PORT }`)))
    .catch((error) => console.log(error.message));




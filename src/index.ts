import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Import main router
import mainRouter from './interface/routes';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev')); // Use morgan for logging

// Use main router
app.use('/api', mainRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
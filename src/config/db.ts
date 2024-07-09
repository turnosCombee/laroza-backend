import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI || '', {});
        console.log('MongoDB connected');
        console.log(`Connecting to MongoDB at ${process.env.MONGO_URI}`);
        // Event listeners for MongoDB connection
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to DB');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Mongoose connection error: ${err.message}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from DB');
        });
        console.log(`Mongoose connection state: ${mongoose.connection.readyState}`);

        // Graceful shutdown
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('Mongoose connection closed due to app termination');
            process.exit(0);
        });

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
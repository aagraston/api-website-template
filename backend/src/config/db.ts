import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // set mongo URI in 
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // if mongo disconnects, log warning
        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB Disconnected');
        });

        // if mongo errors, log error
        mongoose.connection.on('error', (err) => {
            console.error(`MongoDB Connection Error: ${err.message}`);
        });

    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;
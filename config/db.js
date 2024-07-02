import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connected to MongoDB 👍`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://gudun28032000:f9mFQYzlzsJVEOid@cluster0.pelpe4o.mongodb.net/Amazonweb1'

// mongoose.connect(uri)
 

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
//   // Your code here after successful connection
// });
// module.exports = db
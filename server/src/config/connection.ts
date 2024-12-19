import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Destinee:<desto8834>@booksearchproject.urq4s.mongodb.net/?retryWrites=true&w=majority&appName=BookSearchProject');


const db = mongoose.connection;

export default db;
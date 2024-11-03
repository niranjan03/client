// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// Middleware

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']   
  
  }));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://niranjanmaurya03:0wXOjepXU3bSZtTG@cluster0.i7piz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
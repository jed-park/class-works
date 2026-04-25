const express = require('express');
const cors = require('cors');
const connectDB = require('./config/DB');
const autoRoutes = require('./routes/AutoRoutes');
const authRoutes = require('./routes/AuthRoutes')


const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use('/user/api', autoRoutes);
app.use('/doctor/api',authRoutes)

const PORT =  5000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

   
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path= require('path')
dotenv.config();

// MongoDB connection
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use('/api/v1/inventory', require("./routes/inventoryRoutes"));
app.use('/api/v1/analytics', require("./routes/analyticsRoutes"));
app.use('/api/v1/admin', require("./routes/adminRoutes"));
// STATIC FOLDER
app.use(express.static(path.join(__dirname,'./client/build')))

//STATIC ROUTES
app.get("*", function (req,res){
   res.sendFile(path.join(__dirname,"./client/build/index.html"));
})
// Port
const PORT = process.env.PORT || 8085;

// Listen
app.listen(PORT, () => {
   console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`);
});

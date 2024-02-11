const express = require('express');
const app = express();
// const cookieParser=require("cookie-parser")

// const errorMiddleware=require("./middleware/error")
var bodyParser = require('body-parser')
// const fileUpload=require("express-fileupload")
// const dotenv=require('dotenv');
// //config
// dotenv.config({path:"config/config.env"})
const cors=require('cors')
const corsOptions = {
  credentials: true,
};
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// app.use(cookieParser())

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(fileUpload())
//Route Imports

const outlet=require("./routes/outletRoute.js")
const collector=require("./routes/collectorRoute.js")
// const user=require("./routes/userRoute")
// const order=require("./routes/orderRoute")
// const payment=require("./routes/paymentRouter")
app.use("/api/v1",outlet);
app.use("api/v1/collector",collector)

// app.use("/api/v1",user);

// app.use("/api/v1",order);
// app.use("/api/v1",payment)
// Middleware for error


// app.use(errorMiddleware);

module.exports = app;
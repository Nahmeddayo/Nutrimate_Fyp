const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const userAuthentication=require("./routes/userAuthentication");


var PORT = process.env.PORT || 5000;

// mongoose
//   .connect("mongodb://localhost:27017/jobia", {}
//   F5CL9td4PB8yt9WK)
mongoose
  .connect(
    "mongodb+srv://noman:MlhgVyYU2izqgxn2@cluster0.6hffqza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => {
    console.log("ressss=>>");
  })
  .catch((err) => {
    console.log("errrr=>", err);
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api",userAuthentication);

app.listen(PORT, (req, res) => {
  console.log("server is running on port", PORT);
});
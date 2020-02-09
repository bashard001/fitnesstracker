const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// mongodb://heroku_vtp7kv56:d6mvgj91mvkcvatgaahqc47ppm@ds061681.mlab.com:61681/heroku_vtp7kv56
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/workout";
mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

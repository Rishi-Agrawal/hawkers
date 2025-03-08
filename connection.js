const mongoose = require("mongoose");

async function connectToMonogoDB() {
  const mongourl = "mongodb+srv://hitesh:hitesh@cluster0.jj0dke7.mongodb.net/hawker";
  mongoose
    .connect(mongourl)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("failed");
    });
}

module.exports = connectToMonogoDB;

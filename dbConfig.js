const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://yuaaraj1:yuaaraj1@cluster0.zdrmnve.mongodb.net/foodozer")
  .then((response) => {
    console.log("mongo connected");
  })
  .catch((error) => {
    console.log(error);
  });

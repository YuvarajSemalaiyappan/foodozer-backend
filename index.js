const express = require("express");
const nodeServer = express();
const cors = require("cors");
const PORT = 6001;
const HOST = "localhost";

// INJECTING APP SERVER
nodeServer.use("/", require("./app"));

// CONFIGURE THE MIDDLEWARES
// INJECT NODE APPLICATION

nodeServer.listen(PORT, HOST, () => {
  require("./dbConfig");
});

nodeServer.listen(PORT, () => console.log("app started in PORT", PORT));
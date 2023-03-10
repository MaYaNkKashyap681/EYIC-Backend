const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./mongodb/connect.js");

//global Middlewares
app.use(express.json());
app.use(cors());

//custom made routes

app.use("/users", require("./routes/sampleroute.js"));
app.use("/v1/posts", require("./routes/croppostroute.js"));
app.use("/v1/expert", require("./routes/expertadvicceroute.js"));

function startServer() {
  try {
    const PORT = 3000;
    const link = "mongodb://localhost/EyicMockBackend";
    connectDb(link);
    app.listen(PORT, () => {
      console.log("Server is Started at PORT:", PORT);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();

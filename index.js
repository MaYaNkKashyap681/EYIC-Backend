const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./mongodb/connect.js");

//global Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://smart-bizuka-app.vercel.app'
}
));

//custom made routes

app.use("/users", require("./routes/sampleroute.js"));
app.use("/v1/posts", require("./routes/croppostroute.js"));
app.use("/v1/expert", require("./routes/expertadvicceroute.js"));

app.get("/", (req, res) => {
  res.status(200).send("Hello  Connected");
});

function startServer() {
  try {
    const PORT = 3000;
    const link = "mongodb+srv://root:root@cluster0.nlt2pof.mongodb.net/?retryWrites=true&w=majority";
    connectDb(link);
    app.listen(PORT, () => {
      console.log("Server is Started at PORT:", PORT);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();

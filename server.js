const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connecDb = require("./config/dbConnection");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
connecDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use(express.static(__dirname + '/uploads'))
app.use("/api/userdata", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/masters-dropdown", require("./routes/masterRoutes"));
app.use("/mail", require("./routes/emailRoutes"))
app.use("/", (req, res)=>{
  res.send("Server Is Running Perfectly !!")
})
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});

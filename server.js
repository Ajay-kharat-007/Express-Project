const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connecDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path");
const multer = require("multer");

connecDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use("/api/userdata", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/masters-dropdown", require("./routes/masterRoutes"))
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

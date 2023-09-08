const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connecDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connecDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// app.get('/api/contacts', (req, res)=>{
//     // res.send("Get all contacts")
//     // for json format
//     res.status(200).json({message : "Get All Contacts"})
// })

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

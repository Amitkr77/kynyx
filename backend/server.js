const express = require("express");
require("dotenv").config();
const cors = require("cors");
const contactRoutes = require("./routes/contact.route");
const errorHandler = require("./middlewares/errorHandler");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

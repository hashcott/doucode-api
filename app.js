const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const db = require("./db");

const app = express();
const PORT = 3000 || process.env.PORT;
//
db();
//
const CourseRoute = require("./routes/courses.route");
const ModuleRoute = require("./routes/modules.route");
const CheckPointRoute = require("./routes/checkpoint.route");

//
app.use(logger("tiny"));
app.use(cors());
app.use(express.json());
app.use("/courses", CourseRoute);
app.use("/modules", ModuleRoute);
app.use("/checkpoints", CheckPointRoute);

app.listen(PORT, () => console.log(`Running on ${PORT}`));

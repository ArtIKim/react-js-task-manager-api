const express = require("express");
const app = express();

const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Task manager");
});

app.use("/api/v1/tasks", tasks);

// initialize server
const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));

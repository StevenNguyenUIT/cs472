const express = require('express');
cors = require('cors');
const studentRouter = require("./router/studentRouter")
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong: " + err.message });
})

app.listen(port, () => {
    console.log('Your Server is running on ' + port);
});
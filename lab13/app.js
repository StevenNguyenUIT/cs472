const express = require('express');
const studentRouter = require("./router/studentRouter")
const app = express();

app.use(express.json());
app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong: " + err.message });
})

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});
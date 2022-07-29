const express=require("express");
const cors = require("cors");

const app=express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Backend Server is running on port ${PORT}`);
});
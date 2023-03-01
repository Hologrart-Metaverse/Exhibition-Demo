import express from "express";
import path from "path";


const app = express();

app.use(express.static("Views/ExhibitionNew1"));

app.listen(5000, () => console.log("Started on port 5000"));
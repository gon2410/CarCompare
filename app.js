import express from "express";
import mongoose from "mongoose";
import carsRouter from "./src/routes/cars.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/cars", carsRouter);


const PORT = process.env.PORT || 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port: ${httpServer.address().port}`);
})
httpServer.on("error", error => console.log(error));

mongoose.connect("mongodb+srv://goonolivera:xyzab3landa@cluster0.rdf8a7f.mongodb.net/CarCompare?retryWrites=true&w=majority")
.then(() => console.log("Database connected."))
.catch(err => console.log(err));


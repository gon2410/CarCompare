import mongoose from "mongoose";

const carCollection = "cars";

const carSchema = new mongoose.Schema({
    brand: String,
    name: String,
    engine: String,
    displacement: Number,
    horsepower: Number,
    torque: Number,
    year: Number,
    zero_to_onehundred: Number,
    top_speed: Number,
    image: String
})

export const carModel = mongoose.model(carCollection, carSchema);
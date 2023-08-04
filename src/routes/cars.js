import { Router } from "express";
import CarManager from "../DAO/CarDAO.js";

const carManager = new CarManager();
const carsRouter = Router();

carsRouter.get("/", async (req, res) => {
    let result;
    result = await carManager.getAllCars();
    res.send(result);
})

carsRouter.post("/", async (req, res) => {
    let cars = req.body;
    let car1 = await carManager.getCarById(cars.car1);
    let car2 = await carManager.getCarById(cars.car2);

    let comparison = [compare(car1, car2)];
    let carsArray = [car1[0], car2[0]];
    let result = {carsArray, comparison};
    res.send(result);
})

function compare(car1, car2) {
    let comparison = {};
    let carr1 = car1[0];
    let carr2 = car2[0];

    if (carr1.horsepower > carr2.horsepower) {
        comparison.horsepower_winner = {car: carr1._id, diff: carr1.horsepower - carr2.horsepower}
        comparison.horsepower_loser = {car: carr2._id, diff: -(carr1.horsepower - carr2.horsepower)}
    } else if (carr2.horsepower > carr1.horsepower) {
        comparison.horsepower_winner = {car: carr2._id, diff: carr2.horsepower - carr1.horsepower}
        comparison.horsepower_loser = {car: carr1._id, diff: -(carr1.horsepower - carr2.horsepower)}
    }

    if (carr1.torque > carr2.torque) {
        comparison.torque_winner = {car: carr1._id, diff: carr1.torque - carr2.torque};
        comparison.torque_loser = {car: carr2._id, diff: -(carr1.torque - carr2.torque)};
    } else if (carr2.torque > carr1.torque) {
        comparison.torque_winner = {car: carr2._id, diff: carr2.torque - carr1.torque};
        comparison.torque_loser = {car: carr1._id, diff: -(carr1.torque - carr2.torque)};
    }

    if (carr1.top_speed > carr2.top_speed) {
        comparison.top_speed_winner = {car: carr1._id, diff: carr1.top_speed - carr2.top_speed};
        comparison.top_speed_loser = {car: carr2._id, diff: -(carr1.top_speed - carr2.top_speed)};
    } else if (carr2.top_speed > carr1.top_speed) {
        comparison.top_speed_winner = {car: carr2._id, diff: carr2.top_speed - carr1.top_speed};
        comparison.top_speed_loser = {car: carr1._id, diff: -(carr1.top_speed - carr2.top_speed)};
    }

    return comparison;
}

export default carsRouter;
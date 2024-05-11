import { carModel } from "./models/car.model.js";

class CarManager {
    constructor() {
        this.model = carModel;
    }

    async getAllCars() {
        let cars;
        try {
            cars = await this.model.find();
        } catch (error) {
            console.log(error);
        }

        return cars;
    }

    async getCarById(id) {
        let car;
        try {
            car = await this.model.find({_id: id})
        } catch (error) {
            console.log(error);
        }

        return car;
    }
    
    async getCarsByName(carName) {
        let cars;
        try {
            cars = await this.model.find({name: { "$regex": carName, "$options": "i" }});
        } catch (error) {
            console.log(error);
        }

        return cars;
    }
}

export default CarManager;

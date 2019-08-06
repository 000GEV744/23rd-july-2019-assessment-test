"use strict";
exports.__esModule = true;
var PaganiHuayra = {
    brand: "pagani",
    wheels: 4,
    braking_system: "Front Ventilated, Rear Disk",
    engine_CC: "5980 cc",
    power: 700,
    torque: 1000,
    Fuel_Tank_Capacity: 85,
    No_Of_Gears: 7,
    average: 2.3,
    top_speed: 370,
    category: "premium",
    Kerb_weight: 1350
};
var TriumphTiger = {
    brand: "triumph",
    wheels: 2,
    braking_system: "brembo Front disk and Rear Disk",
    engine_CC: "1215 cc",
    power: 139,
    torque: 122,
    Fuel_Tank_Capacity: 20,
    No_Of_Gears: 6,
    average: 18,
    top_speed: 370,
    Fuel_Delivery: "string",
    Wheelbase: 1520
};
var automobile = /** @class */ (function () {
    function automobile(automobile) {
        this.automobileTye = automobile;
    }
    automobile.prototype.getSpecs = function () {
        return this.automobileTye;
    };
    return automobile;
}());
var bikeObj = new automobile(TriumphTiger);
var carObj = new automobile(PaganiHuayra);
console.log(carObj.getSpecs());
console.log(bikeObj.getSpecs());

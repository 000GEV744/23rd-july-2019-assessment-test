import { Automobiles } from './structures/automobileStruct';

interface car extends Automobiles{
     category:string,
     Kerb_weight: number
}

interface bike extends Automobiles{
    
    Fuel_Delivery: string,
    Wheelbase:number
}


const PaganiHuayra={
    brand:"pagani",
    wheels:4,
    braking_system:"Front Ventilated, Rear Disk",
    engine_CC: "5980 cc",
    power:700,
    torque: 1000,
    Fuel_Tank_Capacity: 85,
    No_Of_Gears:7,
    average: 2.3,
    top_speed:370,
    category:"premium",
     Kerb_weight: 1350
}

const TriumphTiger={
    brand:"triumph",
    wheels:2,
    braking_system:"brembo Front disk and Rear Disk",
    engine_CC: "1215 cc",
    power:139,
    torque: 122,
    Fuel_Tank_Capacity: 20,
    No_Of_Gears:6,
    average: 18,
    top_speed:370,
    Fuel_Delivery: "string",
    Wheelbase:1520
}
 
class automobile <T extends Automobiles> {
     automobileTye: T
     constructor(automobile:T)
     {
         this.automobileTye = automobile
     }
     getSpecs():T {
         return this.automobileTye
     }
}


const bikeObj = new automobile<bike>(TriumphTiger)
const carObj= new automobile<car>(PaganiHuayra)
console.log(carObj.getSpecs());
console.log(bikeObj.getSpecs())
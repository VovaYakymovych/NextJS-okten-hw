"use server";

import {ICar} from "@/models/ICar";

export const getCars = async ():Promise<ICar[]> =>{
    try {
        return await fetch("http://localhost:3000/cars/api").then(value => value.json());
    } catch (e) {
        console.error("Error fetching cars:", e);
        return [];
    }
}

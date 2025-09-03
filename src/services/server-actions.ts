"use server";

import {axiosInstance} from "@/services/axiosInstance";
import {ICar} from "@/models/ICar";

export const getCars = async ():Promise<ICar[]> =>{
    try {
        const res = await axiosInstance.get<ICar[]>("/cars");
        return res.data;
    } catch (e) {
        console.error("Error fetching cars:", e);
        return [];
    }
}

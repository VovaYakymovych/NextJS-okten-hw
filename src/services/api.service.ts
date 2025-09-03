import {axiosInstance} from "@/services/axiosInstance";
import {ICar} from "@/models/ICar";

export const saveCar = async (car:ICar)=>{
    await axiosInstance.post<ICar>('/cars',car)
}
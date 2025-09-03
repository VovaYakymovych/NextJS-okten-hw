import React from 'react';
import {getCars} from "@/services/server-actions";
import Car from "@/components/CarsComponents/Car/Car";
import './Cars.css'

const Cars = async () => {

    const cars = await getCars()
    return (
        <div className={'cars'}>
            {cars.map (car => <Car key={car.id} item={car}/>)}
        </div>
    );
};

export default Cars;
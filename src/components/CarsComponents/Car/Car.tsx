import React, {FC} from 'react';
import {ICar} from "@/models/ICar";
import './Car.css'

type CarsProps = {
    item: ICar
}

const Car:FC<CarsProps> = ({item}) => {
    return (
        <div className={'Car'}>
            <p className={'CarInfo'}>🚘 {item.brand}</p>
            <p className={'CarInfo'}>💰 {item.price}</p>
            <p className={'CarInfo'}>📆 {item.year}</p>
        </div>
    );
};

export default Car;
'use client'

import {useForm} from "react-hook-form";
import React from 'react';
import {ICar} from "@/models/ICar";
import {saveCar} from "@/services/api.service";
import './AddCar.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/services/joi/carValidator";

const AddCar = () => {

    const {handleSubmit, register, formState:{errors} } = useForm<ICar>({mode:"all",resolver:joiResolver(carValidator)})

    const formSubmit = async (data:ICar) =>{
        await saveCar(data)
        console.log(data)
    }

    return (
        <div className={'formComponent'}>
            <form className={'formCar'} onSubmit={handleSubmit(formSubmit)}>

                <div className={'inputDiv'}>
                    <input type="text" placeholder={'Brand'} {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div className={'inputDiv'}>
                    <input type="number" placeholder={'Year'} {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>


                <div className={'inputDiv'}>
                    <input type="number" placeholder={'Price'} {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddCar;
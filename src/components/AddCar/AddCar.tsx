'use client';

import React from 'react';
import {ICar} from "@/models/ICar";
import {saveCar} from "@/services/api.service";
import './AddCar.css'

const AddCar = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const newCar: ICar = {
            brand: formData.get("brand") as string,
            year: Number(formData.get("year")),
            price: Number(formData.get("price")),
        };

        console.log(newCar);
        await saveCar(newCar);
        form.reset();
    };

    return (
        <div className={'formComponent'}>
            <form className={'formCar'} onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <input type="text" name="brand" placeholder="Brand" required />
                </div>

                <div className="inputDiv">
                    <input type="number" name="year" placeholder="Year" required />
                </div>

                <div className="inputDiv">
                    <input type="number" name="price" placeholder="Price" required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddCar;

import React from 'react';
import {ICar} from "@/models/ICar";
import {saveCar} from "@/services/api.service";
import './AddCar.css'
import Form from "next/form";

const AddCar = () => {
    const saveAction = async (formData:FormData) => {

        const newCar:ICar = {
            brand: formData.get("brand") as string,
            year: Number(formData.get("year")),
            price: Number(formData.get("price")),
        };
        console.log(newCar);
        await saveCar(newCar);
    };

    return (
        <div className={'formComponent'}>
            <Form className={'formCar'} action={saveAction}>
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
            </Form>
        </div>
    );
};

export default AddCar;
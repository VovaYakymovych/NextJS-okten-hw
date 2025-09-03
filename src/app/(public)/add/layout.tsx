import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Add Car'
}
type Props = { children: React.ReactNode }
const AddCar = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default AddCar;
import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: `User`
}
type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UserLayout;
import React from 'react';
import Link from "next/link";
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <Link href={'/cars'}><button>Show Cars</button></Link>
            <Link href={'/add'}><button>Add Car</button></Link>
        </div>
    );
};

export default Menu;
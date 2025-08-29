import React from 'react';
import Link from "next/link";
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <Link href={'/users'}><button>Users</button></Link>
            <Link href={'/comments'}><button>Comments</button></Link>
            <Link href={'/posts'}><button>Posts</button></Link>

        </div>
    );
};

export default Menu;
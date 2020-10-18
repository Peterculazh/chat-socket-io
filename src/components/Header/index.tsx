// import "./header.sass";
import Link from "next/link";
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    const isOpen = (isTrue: boolean) => isTrue ? " is-active" : ''

    return <header className="header">
        <div className="container">
            <h4 className="header-title">Forgetful chat</h4>
        </div>
    </header>
}

export default Header;
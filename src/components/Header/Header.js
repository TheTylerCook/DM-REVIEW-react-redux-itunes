import React from 'react';

import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => {
    return (
        <div className="header-wrap">
            <Logo />
            <Search />
       </div>
    )
}

export default Header
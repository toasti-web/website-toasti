import * as React from "react";

import Navbar  from "./navbar";

const NavbarWrapper = ({ children }) => (
    <div >
        <NavBar />
        {children}
    </div>
);
 
export default NavbarWrapper;
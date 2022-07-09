import * as React from "react";

import NavBar  from "./navbar";

const NavbarWrapper = ({ children }) => (
    <div >
        <NavBar />
        {children}
    </div>
);
 
export default NavbarWrapper;
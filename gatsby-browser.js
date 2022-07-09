import * as React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@popperjs/core/dist/umd/popper.min.js";

import NavbarWrapper from "./src/components/navbarwrapper";

export const wrapPageElement = ({element, props}) => {
    return <NavbarWrapper {...props}>{element}</NavbarWrapper>;
}
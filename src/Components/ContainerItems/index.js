import React from "react";

import {ContainerItems} from "./styles.js"

function ContainerSmaller (props){
    
    return <ContainerItems isBlur={props.isBlur}>{props.children}</ContainerItems>
}

export default ContainerSmaller
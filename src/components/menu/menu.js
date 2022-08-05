import React from "react";
import Button from 'react-bootstrap/Button';
function Content(){
    return(
    <Button onClick={() => toggleShow(true)}>Show Toast</Button>
    )
}
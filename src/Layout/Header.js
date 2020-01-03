import React from 'react';
import {Link} from "react-router-dom";

const styleTitle = {
    fontSize: '40px',
    background: 'black',
    color: 'white',
    textAlign: 'center',
    margin: '0',
    padding: '30px',

};

export const Header = (props) =>  {
    return (
            <div style={styleTitle}>
                <h1> Daily Checklist   </h1>
                <Link to="./Information"> About </Link>

            </div>
    );
}

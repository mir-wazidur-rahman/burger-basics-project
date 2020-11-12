import React from 'react';

import burgerlogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

//this is being done so that the path is dynamic and webpack method imports it in the package

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerlogo} alt="Myburger"/>
    </div>
);

export default logo;
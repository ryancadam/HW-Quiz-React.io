import React from 'react';
import Ox from '../Ox';
import Backdrop from './Backdrop';
import style from './Display.module.css';

const scoreDisplay = props => (
    <Ox>
        <Backdrop show={props.show} clicked={props.closed} />
        <div 
            className={style.Display}
            style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)', opacity: props.show ? '1': '0'
            }}>
            <h2>Score: {props.userScore}%</h2>
        </div>
    </Ox>
);

export default scoreDisplay;
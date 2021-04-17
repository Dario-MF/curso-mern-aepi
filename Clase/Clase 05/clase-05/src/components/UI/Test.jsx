import React from 'react';
import classes from './styled/Test.module.css';

const Test = () => {
    let estilosParrafos = []
    return (
        <div>
            <p className={classes.main}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem, ipsa fugit saepe exercitationem veniam praesentium facere libero obcaecati pariatur eum cupiditate assumenda velit harum culpa suscipit et ab dolores?</p>
            <button>Pulsa</button>
        </div>
    );
};

export default Test;

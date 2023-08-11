import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid rgb(55, 55, 71)', height: '1265px'}}
             className='scroll'>
            {props.children}
        </div>
    );
}

export default Scroll;
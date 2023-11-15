import React from 'react';
import './createListing.css'

const InputBox = ({ label, labelStyle }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
            {label && <label style={labelStyle}>{label}</label>}
            <input className='inputboxGeneral'/>
        </div>
    );
};

export default InputBox;

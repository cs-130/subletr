import React from 'react';
import './createListing.css'

const InputBox = ({ label, labelStyle, onChange }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
            {label && <label style={labelStyle}>{label}</label>}
            <input className='inputboxGeneral' onChange={(e) => onChange(e)}/>
        </div>
    );
};

export default InputBox;

import React from 'react';
import './createListing.css'

const DropdownBox = ({ label, labelStyle, options, onSelect}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px'  }}>
            {label && <label style={labelStyle}>{label}</label>}
            <select
                className='selectGeneral'
                onChange={(e) => onSelect(e)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownBox;

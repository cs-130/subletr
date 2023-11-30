import React from 'react';
import './createListing.css'

const BlankBox = ({ label, labelStyle, contents }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
            {label && <label style={labelStyle}>{label}</label>}
            <div>
                {contents}
            </div>
        </div>
    );
};

export default BlankBox;

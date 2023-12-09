import React from 'react';
import './createListing.css'

/**
 * The BlankBox component.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the box.
 * @param {object} props.labelStyle - The styles for the label.
 * @param {React.ReactNode} props.contents - The contents of the box.
 * @returns {JSX.Element} The JSX element representing the BlankBox component.
 */
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

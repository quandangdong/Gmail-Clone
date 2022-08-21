import React from 'react';
import "./Section.css";

const Section = ({Icon, title, color, selected}) => {
    return (
        <div className={`section ${selected && 'section-selected'}`}
            style = {{
                borderBottom : `3px solid ${selected && color}`,
                color : `${selected && color}`,
            }}
        >
            {<Icon />}
            <p>{title}</p>
        </div>
    );
}

export default Section;

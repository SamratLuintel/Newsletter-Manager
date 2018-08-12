import React from 'react';

const Slat = (props) => {
    return (
        <div>
            {props.name} 
            Created At:{props.createdAt}
            lastEdited:{props.lastEdited}
        </div>
    );
}

export default Slat;
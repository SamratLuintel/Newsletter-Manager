import React from 'react';

const ModalTrigger = ({text,onOpen}) => {
    return (
        <button onClick={onOpen} className="c-modalBtn">{text || "Modal"}</button>
    );
}

export default ModalTrigger;
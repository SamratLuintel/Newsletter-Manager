import React from 'react';
import ReactDOM from 'react-dom';

const ModalContent = ({onClose,children}) => {
    return ReactDOM.createPortal(
        <aside className="c-modal-cover">
            <div className="c-modal">
                <button onClick={onClose} className="c-modal__close">
                    <span className="u-hide-visually">Close</span>
                    <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
                </button>
                <div className="c-modal__body">
                    {children}
                </div>
            </div>
        </aside>
    ,document.body);
}

export default ModalContent;
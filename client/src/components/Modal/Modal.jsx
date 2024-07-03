import React from 'react';

// CSS
import '../../css/detailActivities.css'

const Modal = ({ children, onClose }) => {
    return (
        <div className='modal__container'>
            <div className='modal__content'>

                {children}

                <div className='item__cerrar'>
                    <button className='modal__button no-margin' onClick={onClose}>X</button>
                </div>
                

            </div>
        </div>
    );
};

export default Modal;
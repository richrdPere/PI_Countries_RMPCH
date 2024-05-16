import React from 'react';
import styled from 'styled-components';

// CSS
import '../../css/homePage.css'

const ModalBackground = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  
`;

const ModalContent = styled.div`
    color : white ;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 80%;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,143,38,1) 0%, rgba(150,126,197,1) 48%, rgba(0,255,222,1) 100%);
`;



const Modal = ({ children, onClose }) => {
    return (
        <ModalBackground>
            <ModalContent>
                {children}
                <button className='search-button' onClick={onClose}>Cerrar</button>
            </ModalContent>
        </ModalBackground>
    );
};

export default Modal;
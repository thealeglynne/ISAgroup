"use client";
import React from 'react';
import '../styles/modal.css'; 

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times; 
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;

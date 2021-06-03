import React from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './styles';

const Modal = ({ children, open, onClose }) => {
    if (!open) return null;

    function onOverlayClick() {
        onClose();
    }

    function onDialogClick(e) {
        e.stopPropagation();
    }

    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>
    );
};

export default Modal;
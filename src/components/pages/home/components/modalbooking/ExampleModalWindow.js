import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Button } from '@components/core/button';
import { ModalHeader } from './components/header';
import { BookingForm } from './components/form';

import styles from './styles.scss';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '0px'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal');

class ModalWindow extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <Button
                    className={this.props.buttonStyles}
                    onClick={this.openModal}
                >
                    {this.props.buttonText}
                </Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalHeader onCloseClick={this.closeModal} />
                    <BookingForm />
                </Modal>
            </div>
        );
    }
}

export default ModalWindow;

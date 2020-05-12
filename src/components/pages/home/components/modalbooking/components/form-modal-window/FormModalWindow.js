import React from 'react';
import Modal from 'react-modal';

import styles from './styles.scss';

const customStyles = {
  overlay: {
    position: fixed,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red'
  },
  content: {
    top: 0,
    left: '50%',
    right: auto,
    bottom: auto,
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '0px'
  }
};

Modal.setAppElement('#form-modal')

class FormModalWindow extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }
  render() {
    return (
      
    )
  }
}

export default FormModalWindow;

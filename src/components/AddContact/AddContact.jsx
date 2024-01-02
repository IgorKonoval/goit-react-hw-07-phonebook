import React from 'react';
import Modal from 'react-modal';
import { Section, SectionTitle } from './AddContacts.styled';
import ContactForm from '../Form/Form';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
  },
};

const AddContact = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add contact</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add contact"
      >
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm closeModal={closeModal} />
        </Section>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AddContact;

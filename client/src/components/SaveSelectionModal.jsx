import React, {useState} from 'react';
import Modal from 'react-modal';
import '../styles/SaveSelectionModal.scss';

Modal.setAppElement("#root");

const SaveSelectionModal = (props) => {

  const [modalIsOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const selectSaveSlot = (e) => {
    props.selectSaveSlot(e.target.data)
    closeModal();
  }

  return (
    <Modal
      className="save-selection-modal"
      overlayClassName="save-selection-overlay"
      isOpen={modalIsOpen}
    >

      <div className="story-display">
        <div className="story-display-text">
          Select a save game to continue, or select "new game"...
        </div>
      </div>

      <div className="save-slot-list">
        
        <div className="save-slot-list-item"
             data={{}}
             onClick={selectSaveSlot}>
          New Game
        </div>

      </div>
    </Modal>
  );
}
 
export default SaveSelectionModal;

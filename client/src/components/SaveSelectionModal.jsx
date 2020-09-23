import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { getSaveGames } from '../helpers/Request';
import '../styles/SaveSelectionModal.scss';

Modal.setAppElement("#root");

const SaveSelectionModal = (props) => {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [saveGamesRetrieved, setSaveGamesRetrieved] = useState(false);
  const [saveGames, setSaveGames] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const selectSaveSlot = (e) => {
    props.selectSaveSlot(e.target.data)
    closeModal();
  };

  const saveGameNodes = () => {
    return saveGames.forEach(saveGame => {
      return (
        <div className="save-slot-list-item"
             data={saveGame}
             onClick={selectSaveSlot}>
          {saveGame.name}
        </div>
      )
    });
  };


  useEffect(() => {
    getSaveGames()
    .then(data => setSaveGames(data))
    .then(setSaveGamesRetrieved(true));
  }, []);

  return (
    <Modal
      className="save-selection-modal"
      overlayClassName="save-selection-overlay"
      isOpen={modalIsOpen}
    >

      <div className="story-display">
        <div className="story-display-text">
          Loading...
          { saveGamesRetrieved &&
            "\n\nSelect a save game to continue, or select 'new game'..."
          }
        </div>
      </div>

      { saveGamesRetrieved &&
        <div className="save-slot-list">
        
          <div id="new-game-button"
               className="save-slot-list-item"
               data={{}}
               onClick={selectSaveSlot}>
            New Game
          </div>

          {saveGameNodes}

        </div>
      }
    </Modal>
  );
}
 
export default SaveSelectionModal;

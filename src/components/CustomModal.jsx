import { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalControls from './ModalControls';
import { TILES } from '../data/tiles';

function CustomModal({ isOpen, onRequestClose, activeTileId, setActiveTileId }) {
    const currentTile = TILES.find(tile => tile.id === activeTileId);
    const nextTile = TILES.find(tile => tile.id === activeTileId + 1);
    const previousTile = TILES.find(tile => tile.id === activeTileId - 1);

    const modalTitle = currentTile ? `${currentTile.acf.title_prefix} ${currentTile.title}${currentTile.acf.title_suffix}` : '';
    const modalText = currentTile ? currentTile.acf.modal_content : '';

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight' && nextTile) {
                setActiveTileId(nextTile.id);
            } else if (event.key === 'ArrowLeft' && previousTile) {
                setActiveTileId(previousTile.id);
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, nextTile, previousTile, setActiveTileId]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal__overlay"
            className="modal__container"
            appElement={document.getElementById('root')}
            contentLabel="Modal"
        >
            <div className="modal__border">
                <ModalControls previousTile={previousTile} nextTile={nextTile} setActiveTileId={setActiveTileId} />
                <main className="modal__content" id="modal-1-content">
                    <h2 className="modal__title" id="modal-1-title">{modalTitle}</h2>
                    <div className="modal__text" id="modal-1-text" dangerouslySetInnerHTML={{ __html: modalText }} />
                </main>
                <footer className="modal__header">
                    <button className="modal__close" aria-label="Close modal" onClick={onRequestClose}>&#x2715;</button>
                </footer>
            </div>
        </Modal>
    );
}

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    activeTileId: PropTypes.number,
    setActiveTileId: PropTypes.func.isRequired,
};

export default CustomModal;

import { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ModalControls from './ModalControls';
import ModalHeadOrnament from './ModalHeadOrnament.jsx';

function CustomModal({ tiles, images, isOpen, onRequestClose, activeTileIndex, setActiveTileIndex }) {


    let previousTileIndex = null;
    let nextTileIndex = null;

    if (activeTileIndex !== null) {
        if (tiles[activeTileIndex - 1]) {
            previousTileIndex = activeTileIndex - 1;
        }
        if (tiles[activeTileIndex + 1]) {
            nextTileIndex = activeTileIndex + 1;
        }
    }

    let currentTile = null;
    let currentImagePath = null;
    let modalTitle = '';
    let modalText = '';

    if (activeTileIndex !== null && tiles[activeTileIndex]) {
        currentTile = tiles[activeTileIndex];
        modalTitle = `${currentTile.acf.title_prefix} ${currentTile.acf.title}${currentTile.acf.title_suffix}`;
        modalText = currentTile.acf.modal_content;

        if (images.length > 0) {
            currentImagePath = images.find((imagePath) => imagePath.includes(currentTile.acf.title.toLowerCase()));
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight' && nextTileIndex !== null) {
                setActiveTileIndex(nextTileIndex);
            } else if (event.key === 'ArrowLeft' && previousTileIndex !== null) {
                setActiveTileIndex(previousTileIndex);
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, nextTileIndex, previousTileIndex, setActiveTileIndex]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal__overlay"
            className="modal__container"
            appElement={document.getElementById('root')}
            contentLabel="Modal"
        >
            {currentImagePath && <ModalHeadOrnament imagePath={currentImagePath} />}
            <div className="modal__content">
                <div className="modal__border">
                    <ModalControls previousTileIndex={previousTileIndex} nextTileIndex={nextTileIndex} setActiveTileIndex={setActiveTileIndex} />
                    <main>
                        <h2 className="modal__title" id="modal-1-title">{modalTitle}</h2>
                        <div className="modal__text" id="modal-1-text" dangerouslySetInnerHTML={{ __html: modalText }} />
                    </main>
                    <footer className="modal__footer">
                        <button className="modal__close" aria-label="Close modal" onClick={onRequestClose}>&#x2715;</button>
                    </footer>
                </div>
            </div>
        </Modal>
    );
}

CustomModal.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.shape({
        acf: PropTypes.shape({
            title_prefix: PropTypes.string,
            title: PropTypes.string.isRequired,
            title_suffix: PropTypes.string,
            button_text: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            modal_content: PropTypes.string.isRequired,
        }).isRequired,
    })).isRequired,
    images: PropTypes.array,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    activeTileIndex: PropTypes.number,
    setActiveTileIndex: PropTypes.func.isRequired,
};

export default CustomModal;

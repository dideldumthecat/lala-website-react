import { useState } from 'react';
import TileContainer from './TileContainer';
import CustomModal from './CustomModal';
import { TILES } from '../data/tiles';

function LalaWebsite() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTileId, setActiveTileId] = useState(null);

    const openModal = (activeTile) => {
        setActiveTileId(activeTile);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setActiveTileId(null);
    };

    return (
        <>
        <TileContainer tiles={TILES} openModal={openModal} />
        <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} activeTileId={activeTileId} setActiveTileId={setActiveTileId} />
        </>
    );
}

export default LalaWebsite;

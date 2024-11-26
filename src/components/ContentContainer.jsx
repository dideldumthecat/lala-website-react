import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import LogoTile from './LogoTile';
import CustomModal from './CustomModal';

function ContentContainer({tiles}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTileIndex, setActiveTileIndex] = useState(null);

    const openModal = (tileIndex) => {
        disableScrolling();
        setActiveTileIndex(tileIndex);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        enableScrolling();
        setModalIsOpen(false);
        setActiveTileIndex(null);
    };

    const disableScrolling = () => {
        document.body.style.overflow = 'hidden';
    }

    const enableScrolling = () => {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
        <div className="grid-container">
            {tiles.map((tile, index) => (
                <React.Fragment key={index}>
                    <Tile
                        titlePrefix={tile.acf.title_prefix}
                        title={tile.acf.title}
                        titleSuffix={tile.acf.title_suffix}
                        buttonText={tile.acf.button_text}
                        color={tile.acf.color}
                        openModal={() => openModal(index)}
                    />
                    {/* Render the logo tile after the 4th tile */}
                    {index === 4 && <LogoTile key={`logo-${index}`} />}
                </React.Fragment>
            ))}
        </div>
        <CustomModal tiles={tiles} isOpen={modalIsOpen} onRequestClose={closeModal} activeTileIndex={activeTileIndex} setActiveTileIndex={setActiveTileIndex} />
        </>
    );
}

ContentContainer.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        acf: PropTypes.shape({
            title_prefix: PropTypes.string,
            title_suffix: PropTypes.string,
            button_text: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            modal_content: PropTypes.string.isRequired,
        }).isRequired,
    })).isRequired
};

export default ContentContainer;

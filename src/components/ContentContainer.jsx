import React, { useEffect, useCallback } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tile from './Tile';
import LogoTile from './LogoTile';
import CustomModal from './CustomModal';
import Footer from './Footer';
import Header from './Header';

function ContentContainer({tiles, images, error, setError}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTileIndex, setActiveTileIndex] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();

    const openModal = useCallback((index) => {
        disableScrolling();
        setActiveTileIndex(index);
        setModalIsOpen(true);
    }, [])

    const closeModal = () => {
        enableScrolling();
        setModalIsOpen(false);
        setActiveTileIndex(null);
        setError(null);
        navigate('/');
    };

    const disableScrolling = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScrolling = () => {
        document.body.style.overflow = 'auto';
    };

    const generateSlug = (tile) => {
        const fullTitle = `${tile.title} ${tile.acf.button_text}`;
        return fullTitle.toLowerCase().replace(/\s+/g, '-');
    }

    // Change the URL when a tile is clicked
    useEffect(() => {
        if (activeTileIndex !== null) {
            navigate('/' + generateSlug(tiles[activeTileIndex]));
        }
    }, [activeTileIndex, navigate, tiles]);

    // Open the respective modal when the URL contains a slug
    useEffect(() => {
        if (slug) {
            const tileIndex = tiles.findIndex(tile => generateSlug(tile) === slug);
            if (tileIndex !== -1) {
                openModal(tileIndex);
            } else {
                setError(new Error('Tile not found'));
            }
        }
    }, [slug, setActiveTileIndex, openModal, tiles, setError]);

    // Open the modal when an error occurs
    useEffect(() => {
        if (error) {
            openModal(null);
        }
    }, [error, openModal]);

    return (
        <>
        <Header />
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
        <CustomModal
            tiles={tiles}
            images={images}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            activeTileIndex={activeTileIndex}
            error={error}
        />
        <Footer/>
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
    })).isRequired,
    images: PropTypes.array.isRequired,
    error: PropTypes.object,
    setError: PropTypes.func,
};

export default ContentContainer;

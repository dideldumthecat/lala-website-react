import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import LogoTile from './LogoTile';

function TileContainer({tiles, openModal}) {
    return (
        <div className="grid-container">
            {tiles.map((tile, index) => (
                <React.Fragment key={tile.id}>
                    <Tile
                        titlePrefix={tile.acf.title_prefix}
                        title={tile.title}
                        titleSuffix={tile.acf.title_suffix}
                        buttonText={tile.acf.button_text}
                        color={tile.acf.tile_color}
                        openModal={() => openModal(tile.id)}
                    />
                    {/* Render the logo tile after the 4th tile */}
                    {tile.id === 4 && <LogoTile key={`logo-${index}`} />}
                </React.Fragment>
            ))}
        </div>
    );
}

TileContainer.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        acf: PropTypes.shape({
            title_prefix: PropTypes.string,
            title_suffix: PropTypes.string,
            button_text: PropTypes.string.isRequired,
            tile_color: PropTypes.string.isRequired,
            modal_content: PropTypes.string.isRequired,
        }).isRequired,
    })).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default TileContainer;

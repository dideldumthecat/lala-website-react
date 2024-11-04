import PropTypes from 'prop-types';
import TileTitle from './TileTitle';

function Tile({titlePrefix, title, titleSuffix, buttonText, color, openModal}) {
    return (
        <div
            id={title.toLowerCase()}
            className={"tile " + color}
            onClick={openModal}
        >
            <TileTitle titlePrefix={titlePrefix} title={title} titleSuffix={titleSuffix} />
            <button>{buttonText}</button>
        </div>
    );
}

Tile.propTypes = {
    titlePrefix: PropTypes.string,
    title: PropTypes.string.isRequired,
    titleSuffix: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default Tile;

import PropTypes from 'prop-types';

function ModalControls({previousTile, nextTile, setActiveTileId}) {
    const handleClick = (tile) => () => {
        setActiveTileId(tile.id);
    };

    return (
        <>
            {previousTile && (<div className="modal__control modal__control--prev" onClick={handleClick(previousTile)} >&#x2329;</div>)}
            {nextTile && (<div className="modal__control modal__control--next" onClick={handleClick(nextTile)} >&#x232a;</div>)}
        </>
    );
}

ModalControls.propTypes = {
    previousTile: PropTypes.shape({
        id: PropTypes.number,
    }),
    nextTile: PropTypes.shape({
        id: PropTypes.number,
    }),
    setActiveTileId: PropTypes.func.isRequired,
};

export default ModalControls;

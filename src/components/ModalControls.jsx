import PropTypes from 'prop-types';

function ModalControls({previousTileIndex, nextTileIndex, setActiveTileIndex}) {
    const handleClick = (tileIndex) => () => {
        setActiveTileIndex(tileIndex);
    };

    return (
        <>
            {previousTileIndex !== null && (<div className="modal__control modal__control--prev" onClick={handleClick(previousTileIndex)} >&#x3008;</div>)}
            {nextTileIndex !== null && (<div className="modal__control modal__control--next" onClick={handleClick(nextTileIndex)} >&#x3009;</div>)}
        </>
    );
}

ModalControls.propTypes = {
    previousTileIndex: PropTypes.number,
    nextTileIndex: PropTypes.number,
    setActiveTileIndex: PropTypes.func.isRequired,
};

export default ModalControls;

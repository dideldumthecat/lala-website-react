import PropTypes from 'prop-types';

function ModalHeadOrnament({ imagePath }) {

    return (
        <div className="modal__head-ornament">
            {imagePath  && <img src={imagePath} alt="Header ornament image" />}
        </div>
    );
}

ModalHeadOrnament.propTypes = {
    imagePath: PropTypes.string.isRequired,
};

export default ModalHeadOrnament;

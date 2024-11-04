import PropTypes from 'prop-types';

function TileTitle({titlePrefix, title, titleSuffix}) {
    const subtitleAlignment = titlePrefix ? "align-left" : "align-right";

    return (
        <div className="heading-container">
            <h2>
                {titleSuffix && title}
                <span className={"subheading " + subtitleAlignment}>
                    {titlePrefix || titleSuffix}
                </span>
                {titlePrefix && title}
            </h2>
        </div>
    );
}

TileTitle.propTypes = {
    titlePrefix: PropTypes.string,
    title: PropTypes.string.isRequired,
    titleSuffix: PropTypes.string,
};

export default TileTitle;

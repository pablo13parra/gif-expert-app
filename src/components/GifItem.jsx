
import PropTypes from 'prop-types';
const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <img src={url} alt="altxd" />
        </div>
    )
}

export default GifItem;
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string
}
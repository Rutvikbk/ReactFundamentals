import ListItem from './ListItem';
import PropTypes from 'prop-types'; 

function List(props) {
    let items = props.items.map(item => <ListItem item={item}/>); //array li elements

    return (
        <>
            <h3>{props.title}</h3>
            <ul>
                {items}
            </ul>
        </>
    );
}

List.defaultProps = {
    items: []
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default List;
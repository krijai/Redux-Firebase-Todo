import React from 'react';
import './AddButton.scss';

const AddButton = (props) => {
    return (
        <button className="circled-plus-btn" onClick={props.addNewItem}>
            <i className="plus fa fa-plus"></i>
        </button>
    )
}

export default AddButton;
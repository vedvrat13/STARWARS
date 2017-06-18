import React,{PropTypes} from 'react';
// import {Row,Col} from 'react-flexbox-grid';

const CommentsDisplayListView = (props) => {
    return (
        <li className='commentListItem'>
            {props.message}
        </li>
    );
};

CommentsDisplayListView.propTypes = {
    message: PropTypes.string
};

export default CommentsDisplayListView;

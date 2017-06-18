import React,{PropTypes} from 'react';
// import {Row,Col} from 'react-flexbox-grid';

const CommentsDisplayListView = (props) => {
    return (
        <div>{props.message}</div>
    );
};

CommentsDisplayListView.propTypes = {
    message: PropTypes.string
};

export default CommentsDisplayListView;

import React,{PropTypes} from 'react';
import {Row,Col} from 'react-flexbox-grid';

const CommentsSection = (props) => {
    return (
        <Row>
            <Col md={12} xs={12}>
                <textarea id='commentsArea' rows='4' cols='50' placeholder='Comments Here...' />
            </Col>
            <Col md={4} xs={4}>
                <input type='button' className='commentsButton'
                    value='Post Comment'
                    onClick={() => {
                        props.saveComment(props.peopleData.url, document.querySelector('#commentsArea').value);
                        document.querySelector('#commentsArea').value='';
                    }}/>
            </Col>
        </Row>
    );
};

CommentsSection.propTypes = {
    saveComment: PropTypes.func,
    peopleData: PropTypes.object
};

export default CommentsSection;

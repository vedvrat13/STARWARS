import React,{PropTypes} from 'react';
import {Row,Col} from 'react-flexbox-grid';
import _ from 'lodash';

import CommentsSection from './CommentsSection';
import CommentsDisplayListView from './CommentsDisplayListView';

export function renderAttributes(props){
    let elements = [];
    _.each(props, function (value, key) {
        if(typeof(value) == 'string'){
            elements.push(<Col md={12} xs={12} key={key+value}>
                <Row className='characterFieldRow'>
                    <Col md={4} xs={4}>
                        <label htmlFor={key+'_Field'} className='characterFieldLabel'>{key.replace(/_|-/g,' ')} :</label>
                    </Col>
                    <Col md={6} xs={6} name={key+'_Field'}>
                        {value}
                    </Col>
                </Row>
            </Col>);
        }
    });
    return elements;
}

export function renderComments(props){
    if(_.size(props.comments) > 0){
        return props.comments.map((comment) => {
            return <CommentsDisplayListView message={comment}/>;
        });
    } else {
        return;
    }
}

const CharacterDetailsView = (props) => {
    if(_.isUndefined(props.peopleData)){
        return (
            <div>
                Please click on the <strong className='characterNameHint'>Character Name</strong> to see details
            </div>
        );
    } else {
        return (
            <div>
                <Row>
                    <Col md={12} xs={12} className='characterNameField'>{props.peopleData.name} from {props.planetData.name}</Col>
                </Row>
                <Row className='characterFields'>
                    {renderAttributes(props.peopleData)}
                </Row>
                <Row className='commentsSection'>
                    <Col md={12} xs={12}>
                        <h4>Comments:</h4>
                        <ul>
                            {renderComments(props.peopleData)}
                        </ul>
                    </Col>
                    <Col md={12} xs={12}>
                        <CommentsSection {...props} saveComment={props.saveComment} />
                    </Col>
                </Row>
            </div>
        );
    }
};

CharacterDetailsView.propTypes = {
    name: PropTypes.string,
    planetData: PropTypes.object,
    peopleData: PropTypes.object,
    selected: PropTypes.object,
    saveComment: PropTypes.func
};

export default CharacterDetailsView;

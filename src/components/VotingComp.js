import React,{PropTypes} from 'react';
import {Row,Col} from 'react-flexbox-grid';

const VotingComp = (props) => {
    return (
        <Col md={4} xs={4}>
            <Row>
                <Col md={4} xs={4} className='icons'>
                    <Row>
                        <Col md={6} xs={6}>
                            <img src='assets/images/ic_thumb_up.svg' alt='Upvote Icon'
                            data-itemUrl={props.url} onClick={(event)=>props.modifyVotes(event.target.getAttribute('data-itemUrl'), 'ADD')}/>
                        </Col>
                        <Col md={6} xs={6}>
                            {props.votes.upvoted}
                        </Col>
                    </Row>
                </Col>
                <Col md={4} xs={4} className='icons'>
                    <Row>
                        <Col md={6} xs={6}>
                            <img src='assets/images/ic_thumb_down.svg' alt='Downvote Icon'
                            data-itemUrl={props.url} onClick={(event)=>props.modifyVotes(event.target.getAttribute('data-itemUrl'), 'MINUS')}/>
                        </Col>
                        <Col md={6} xs={6}>
                            {props.votes.downvoted}
                        </Col>
                    </Row>
                </Col>
                <Col md={4} xs={4} className='icons'>
                    <Row center='xs'>
                        <Col md={12} xs={12}>
                            {props.votes.upvoted + props.votes.downvoted}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
};

VotingComp.propTypes = {
    url: PropTypes.string,
    votes: PropTypes.object,
    modifyVotes: PropTypes.func
};

export default VotingComp;

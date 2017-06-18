import React,{PropTypes} from 'react';
import {Row,Col} from 'react-flexbox-grid';

import VotingComp from './VotingComp';

const CharacterListView = (props) => {
    return (
        <li key={props.name} tabIndex={props.index} className='charListItem'>
            <Row>
                <Col md={6} xs={6} className='characterNameField'
                    data-itemUrl={props.url} onClick={(event)=>props.loadPeopleData(event.target.getAttribute('data-itemUrl'))}>
                    {props.name}
                </Col>
                <Col md={2} xs={2} className='characterPlanetField'>
                    {props.planet.name}
                </Col>
                <VotingComp {...props} modifyVotes={props.modifyVotes}/>
            </Row>
        </li>
    );
};

CharacterListView.propTypes = {
    url: PropTypes.string,
    index: PropTypes.number,
    name: PropTypes.string,
    planet: PropTypes.object,
    loadPeopleData: PropTypes.func,
    modifyVotes: PropTypes.func
};

export default CharacterListView;

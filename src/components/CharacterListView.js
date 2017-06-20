import React,{PropTypes} from 'react';
import {Row,Col} from 'react-flexbox-grid';

import VotingComp from './VotingComp';

const CharacterListView = (props) => {
    if(_.size(props.people) > 0){
        let characterListElements = [];

        // DISPLAY USERS BASED ON POPULARITY
        let sortedPeople = _.orderBy(props.people, [function (o) { return o.votes.upvoted + o.votes.downvoted; }], ['desc']);

        sortedPeople.map((item, index) => {
            let planet = _.find(props.planets, function (planet) {
                if(planet.url == item.homeworld){
                    return planet;
                }
            });
            characterListElements.push(
                <li key={item.name} tabIndex={index} className='charListItem'>
                    <Row>
                        <Col md={6} xs={6} className='characterNameField'
                            data-itemUrl={item.url} onClick={(event)=>props.loadPeopleData(event.target.getAttribute('data-itemUrl'))}>
                            {item.name}
                        </Col>
                        <Col md={2} xs={2} className='characterPlanetField'>
                            {planet.name}
                        </Col>
                        <VotingComp {...item} modifyVotes={props.modifyVotes}/>
                    </Row>
                </li>
            );
        });
        return (
            <ul>
                {characterListElements}
            </ul>
        );
    } else {
        return (
            <div className='loading'>
                Loading...
            </div>
        );
    }
};

CharacterListView.propTypes = {
    url: PropTypes.string,
    index: PropTypes.number,
    name: PropTypes.string,
    planet: PropTypes.object,
    loadPeopleData: PropTypes.func,
    modifyVotes: PropTypes.func,
    people: PropTypes.array,
};

export default CharacterListView;

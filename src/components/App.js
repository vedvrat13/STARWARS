import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid,Row,Col} from 'react-flexbox-grid';
import _ from 'lodash';

// ACTION_CREATORS
import {loadStore,loadPeopleData, modifyVotes, saveComment} from '../actions/actions';

// COMPONENTS
import CharacterListView from './CharacterListView';
import CharacterDetailsView from './CharacterDetailsView';
import SearchBar from './SearchBar';

export class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        console.log('-- Thanks for Viewing my Solution! @vedvrat13 --');
        this.props.loadStore('');
    }
    renderCharacters(props){
        if(_.size(props.people) > 0){
            return props.people.map((item, index) => {
                let planet = _.find(props.planets, function (planet) {
                    if(planet.url == item.homeworld){
                        return planet;
                    }
                });
                return (
                    <CharacterListView {...item} planet={planet} key={index} index={index} loadPeopleData={this.props.loadPeopleData} modifyVotes={props.modifyVotes}/>
                );
            });
        } else {
            return <div>Loading...</div>;
        }
    }
    render() {
        return (
            <Grid>
                <Row center='xs' id='header'>
                    <Col>
                        <h1>STAR WARS</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={6} id='charactersListSection'>
                        <SearchBar loadStore={this.props.loadStore}/>
                        <ul>
                            {this.renderCharacters(this.props)}
                        </ul>
                    </Col>
                    <Col md={6} xs={6} id='characterDetailSection'>
                        <CharacterDetailsView {...this.props.selected} saveComment={this.props.saveComment}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export function mapStateToProps(state){
    let people = state.appReducer;
    console.log(people);
    return people;
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadStore: (searchParam) => {
            dispatch(loadStore(searchParam));
        },
        loadPeopleData: (peopleURL) => {
            dispatch(loadPeopleData(peopleURL));
        },
        modifyVotes: (peopleURL, voteAction) => {
            dispatch(modifyVotes(peopleURL, voteAction));
        },
        saveComment: (peopleURL, comment) => {
            console.log(peopleURL + ' // ' + comment);
            dispatch(saveComment(peopleURL, comment));
        }
    };
};

App.propTypes = {
    people: PropTypes.array,
    selected: PropTypes.object,
    loadStore: PropTypes.func,
    loadPeopleData: PropTypes.func,
    saveComment: PropTypes.func
};

export default (connect)(mapStateToProps, mapDispatchToProps)(App);

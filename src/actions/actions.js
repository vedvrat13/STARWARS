import {LOAD_STORE, SHOW_CHARACTER_DETAIL, UPDATE_VOTE, SAVE_COMMENT} from './constants';
import axios from 'axios';
import _ from 'lodash';

const BASE_URL = 'http://swapi.co/api/';

export function loadStore(searchParam) {
    return function (dispatch, getState) {
        const getPeople = axios.get(BASE_URL+`people/?search=${searchParam}`);

        getPeople.then((people) => {
            let homeworlds = {},getPlanet = [];

            homeworlds = people.data.results.map((people) => {
                return people.homeworld;
            });

            getPlanet = _.uniq(homeworlds, function (e) {
                return e.name;
            });

            getPlanet.map((planet, index) => {
                getPlanet[index] = axios.get(planet);
            });

            Promise.all(getPlanet).then(planets => {
                // Create payload
                dispatch({
                    type: LOAD_STORE,
                    payload: {
                        people: people,
                        planets: planets.map(planet => {
                            return planet.data;
                        })
                    }
                });
            });

        });
    };
}

export function loadPeopleData(people){
    const requestPeople = axios.get(`${people}`);
    return {
        type: SHOW_CHARACTER_DETAIL,
        payload: requestPeople
    };
}

export function modifyVotes(people, voteAction){
    return {
        type: UPDATE_VOTE,
        payload: {
            peopleURL: people,
            voteAction: voteAction
        }
    };
}

export function saveComment(people, message){
    return {
        type: SAVE_COMMENT,
        payload: {
            peopleURL: people,
            message: message
        }
    };
}

import {LOAD_STORE, SHOW_CHARACTER_DETAIL, UPDATE_VOTE, SAVE_COMMENT} from 'actions/constants';

const initialState = {
    people: [],
    planets: [],
    selected: {}
};

export function appReducer(state = initialState, action) {
    switch(action.type){
    case LOAD_STORE: {
        return Object.assign({}, state, {
            people: includeVotes(action.payload.people.data.results, state),
            planets: action.payload.planets
        });
    }
    case SHOW_CHARACTER_DETAIL: {
        return Object.assign({}, state, {
            selected: prepareDetailsData(action.payload.data, state)
        });
    }
    case UPDATE_VOTE: {
        return Object.assign({}, state, {
            people: modifyVoteData(action.payload, state)
        });
    }
    case SAVE_COMMENT:{
        return Object.assign({}, state, {
            people: modifyCommentData(action.payload, state)
        });
    }
    default:
        return state;
    }

}

// Map the User & The Planet
export function prepareDetailsData(currentUser, currentState){
    let updatedUser = {};
    let planet = _.find(currentState.planets, function (planet) {
        if(planet.url == currentUser.homeworld){
            return planet;
        }
    });
    let peopleData = _.find(currentState.people, function (people) {
        if(people.url == currentUser.url){
            return people;
        }
    });
    updatedUser.planetData = planet;
    updatedUser.peopleData = peopleData;
    return updatedUser;
}

// Voting - SEED VOTE & COMMENT DATA
export function includeVotes(peopleList, currentState){
    let updatedPeopleList = null;
    updatedPeopleList = peopleList.map((people) => {
        people.votes = {
            upvoted: 0,
            downvoted: 0
        };
        people.comments = [];
        return people;
    });
    return updatedPeopleList;
}

// MODIFY VOTE DATA
export function modifyVoteData(peopleVoteData, currentState){
    return currentState.people.map((people) => {
        if(people.url == peopleVoteData.peopleURL){
            if(peopleVoteData.voteAction == 'ADD'){
                people.votes.upvoted++;
            } else{
                people.votes.downvoted--;
            }
        }
        return people;
    });
}

// MODIFY COMMENT DATA
export function modifyCommentData(peopleComment, currentState){
    return currentState.people.map((people) => {
        if(people.url == peopleComment.peopleURL){
            people.comments.push(peopleComment.message);
        }
        return people;
    });
}

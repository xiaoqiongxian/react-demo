import {ADD, SEARCH, UPDATE, REMOVE}from './actionTypes.js';

export default (state = [], action) => {
  switch(action.type) {
    case ADD: {
      return [
        {
          key:action.key,
          id:action.id,
          name:action.name,
          status:action.status
        },
        ...state
      ]
    }
    case SEARCH: {
      return state.filter((tech)=>{
        return tech.name === action.text;
      })
    }
    case UPDATE: {
      return state.map((tech)=>{
        if(tech.id === action.id){
          return {
            key:action.key,
            id:action.id,
            name:action.name,
            status:action.status
          }
        }
      })
    }
    case REMOVE: {
      return state.filter((tech) => {
        return tech.id !== action.id;
      })
    }
    default: {
      return state;
    }
  }
}

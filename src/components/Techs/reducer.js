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
      let res = [];
      state.map((tech) => {
        if(tech.id === action.id){
          res.push({
            key:action.key,
            id:action.id,
            name:action.name,
            status:action.status
          })
        }else{
          res.push(tech)
        }
      })
      return res;
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

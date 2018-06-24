import {ADD,REMOVE} from './actionTypes.js';

export default (state = {}, action) => {
  switch (action.type) {
    case REMOVE: {
      return state.filter((techTable) => {
        return techTable.id !== action.id;
      })
    }
    case ADD:{
      return [
          ...state,
          {
            id:action.id,name: action.name,status: action.status
          }
        ]
    }
    default:
      return state
  }
}
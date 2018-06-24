import {REMOVE} from './actionTypes.js';

export default (state = {}, action) => {
  switch (action.type) {
    case REMOVE:
  		return [
          {
            key: '2',id:'2',name: 'html',status: '精通'
          },
          ...state
        ]
    default:
      return state
  }
}
import * as ActionTypes from './actionTypes.js';

let nextTechId = 1;

export const add = (tech) => ({
  type: ActionTypes.ADD,
  key: nextTechId ++,
  id: nextTechId ++,
  name: tech.name,
  status: tech.status
});

export const search = (text) => ({
  type: ActionTypes.SEARCH,
  text: text
});

export const update = (tech) => ({
  type: ActionTypes.UPDATE,
  key:tech.key,
  id: tech.id,
  name: tech.name,
  status: tech.status
});

export const remove = (id) => ({
  type: ActionTypes.REMOVE,
  id: id
});

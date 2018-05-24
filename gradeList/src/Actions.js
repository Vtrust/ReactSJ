import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const add = (item) =>  {
  AppDispatcher.dispatch({
      type:ActionTypes.ADD,
      item:item
  })
};

export const input = (caption,value) =>  {
    AppDispatcher.dispatch({
        type:ActionTypes.INPUT,
        caption:caption,
        value:value
    })
};
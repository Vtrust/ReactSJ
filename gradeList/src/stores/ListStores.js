import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'add';
let items = [];
const ListStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function() {
        return items;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

ListStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.ADD) {
       items.push(action.item);
       console.log(action.item);
       ListStore.emitChange();
    }
});

export default ListStore;
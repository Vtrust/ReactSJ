import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const inputValues = {
    '姓名': '',
    '语文': 0,
    '数学': 0,
    '英语':0,
    '物理':0,
};

const InputStore = Object.assign({}, EventEmitter.prototype, {
    getInputValues: function() {
        return inputValues;
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

InputStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INPUT) {
        inputValues[action.caption] = action.value;
        InputStore.emitChange();
    }
});

export default InputStore;
import {ADD_GRADE, REMOVE_GRADE, CHOSE_GRADE} from './actionType';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_GRADE: {
            return [
                {
                    id: action.id,
                    grade: action.grade,
                    chose: false
                },
                ...state
            ]
        }
        case CHOSE_GRADE: {
            return state.map((gradeItem) => {
                if (gradeItem.id === action.id) {
                    return {...gradeItem, chose: !gradeItem.chose};
                } else {
                    return gradeItem;
                }
            })
        }
        case REMOVE_GRADE: {
            return state.filter((gradeItem) => {
                return gradeItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}
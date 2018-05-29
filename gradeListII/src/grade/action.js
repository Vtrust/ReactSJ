import {ADD_GRADE, REMOVE_GRADE, CHOSE_GRADE} from './actionType';

let nextGradeList = 0;

export const addGrade= (grade) => ({
    type: ADD_GRADE,
    chose: false,
    id: nextGradeList ++,
    grade: grade
    // name: grade.name,
    // chinese:grade.chinese,
    // math:grade.math,
    // english:grade.english,
    // physic:grade.physic
});

export const choseGrade = (id) => ({
    type: CHOSE_GRADE,
    id: id
});

export const removeGrade = (id) => ({
    type: REMOVE_GRADE,
    id: id
});

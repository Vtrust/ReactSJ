import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GradeItem from './gradeItem';
import {choseGrade,removeGrade} from '../action';
import {FilterTypes} from '../../constants';

const GradeList = ({grades, onChoseGrade, onRemoveGrade}) => {
    return (
        <ul className="grade-list">
            {
                grades.map((item) => (
                    <GradeItem
                        key={item.id}
                        grade={item.grade}
                        chose={item.chose}
                        onChose={() => onChoseGrade(item.id)}
                        onRemove={() => onRemoveGrade(item.id)}/>
                ))
            }
        </ul>
    );
};

GradeList.propTypes = {
    grades: PropTypes.array.isRequired
};

const selectVisibleGrades = (grades, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return grades;
        case FilterTypes.CHOSE:
            return grades.filter(item => item.chose);
        case FilterTypes.NOCHOSE:
            return grades.filter(item => !item.chose);
        default:
            throw new Error('unsupported filter');
    }
};

const mapStateToProps = (state) => {
    return {
        grades: selectVisibleGrades(state.grades, state.filter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoseGrade: (id) => {
            dispatch(choseGrade(id));
        },
        onRemoveGrade: (id) => {
            dispatch(removeGrade(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);


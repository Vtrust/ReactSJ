import React from 'react';
import AddGrade from './addGrade';
import GradeList from './gradeList';

// import './style.css';

export default () => {
    return (
        <div className="grade">
            <AddGrade />
            <GradeList />
        </div>
    );
}


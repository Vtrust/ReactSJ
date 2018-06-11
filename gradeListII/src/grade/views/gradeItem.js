import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({onChose, onRemove, chose, grade }) => {
    const checkedProp = chose ? {checked: true} : {};
    let sum = parseFloat(grade.chinese)
        +parseFloat(grade.math)
        +parseFloat(grade.english)
        +parseFloat(grade.physic);
    return (
        <li className="grade-item"
            style={{
                textDecoration: chose ? 'line-through' : 'none'
            }}>
            <input className="chose item" type="checkbox" {...checkedProp} readOnly onClick={onChose} />
            <label className="text item">{grade.name}</label>
            <label className="text item">{grade.chinese}</label>
            <label className="text item">{grade.math}</label>
            <label className="text item">{grade.english}</label>
            <label className="text item">{grade.physic}</label>
            <label className="text item">{sum}</label>
            <button className="remove item" onClick={onRemove}>×</button>
        </li>
    );
};


GradeItem.propTypes = {
    onChose: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    chose: PropTypes.bool.isRequired,
    grade: PropTypes.object.isRequired
};

export default GradeItem;
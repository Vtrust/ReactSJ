import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({onChose, onRemove, chose, grade }) => {
    const checkedProp = chose ? {checked: true} : {};
    let sum = parseFloat(grade.chinese)
        +parseFloat(grade.math)
        +parseFloat(grade.english)
        +parseFloat(grade.physic);
    return (
        <li className="Grade-item"
            style={{
                textDecoration: chose ? 'line-through' : 'none'
            }}>
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onChose} />
            <label className="text">{grade.name}-</label>
            <label className="text">{grade.chinese}-</label>
            <label className="text">{grade.math}-</label>
            <label className="text">{grade.english}-</label>
            <label className="text">{grade.physic}-</label>
            <label className="text">{sum}</label>
            <button className="remove" onClick={onRemove}>×</button>
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
import React from 'react';
import ReactDOM from 'react-dom';
import GradeApp from './GradeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GradeApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

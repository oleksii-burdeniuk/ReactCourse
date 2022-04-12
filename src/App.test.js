import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SamuraiJsApp from './App';

test('it renders ', () => {
    render(<SamuraiJsApp />);
    const div = document.createElement('div')
    ReactDOM.render(<SamuraiJsApp />, div)
});
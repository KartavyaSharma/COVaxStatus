import React from 'react';
import ReactDOM from 'react-dom';

import GetSessionData from './components/SessionList'
import './styles/index.css';

export default function IndexPage() {
    const state = "Madhya Pradesh";
    const district = "Indore";
    const date = "23-05-2021";
    return (
        <div>
            Hello
            <GetSessionData state={state} district={district} date={date} />
        </div>
    )
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));


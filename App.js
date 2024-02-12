import React, {useState} from 'react';
import presidents from './data';
import PresidentCard from '../PresidentCard/PresidentCard';
import './App.css';

function App() {
    const [president, selectPresident] = useState('all')

    return (
        <div className="wrapper">
            <h1>Florida Tech Presidents</h1>
            {president === "all" && (
                presidents.map(president => (
                    <PresidentCard
                        key={president.name}
                        name={president.name}
                        term={president.term}
                        photo={president.photo}
                        about={president.about}
                        status={president.status}
                    />
                )))}

        </div>

    )
}

export default App;
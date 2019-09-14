import React from 'react';
import MainData from './MainData';
import ScoreBoard from './ScoreBoard';
import Batters from './Batters';
import Pitchers from './Pitchers';
import Fielding from './Fielding';
import Officials from './Officials';

import RawData from './data.json';

import './App.css';

function App() {
    return (
        <div className='App'>
            <MainData />
            <ScoreBoard RawData={RawData} />
            <Batters RawData={RawData} />
            <Pitchers RawData={RawData} />
            <Fielding RawData={RawData} />
            <Officials RawData={RawData} />
        </div>
    );
}

export default App;

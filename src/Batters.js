import React from 'react';
import uuidv4 from 'uuid/v4';

import NestedData from './NestedData';

const Batters = props => {
    let away_batters = props.RawData.away_batters;
    let home_batters = props.RawData.home_batters;

    let rowPlyersAway = [
        <div key={uuidv4()} className='divTableRow'>
            {Object.keys(away_batters[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    away_batters.map(obj =>
        rowPlyersAway.push(
            <div key={uuidv4()} className='divTableRow'>
                {Object.values(obj).map(e => (
                    <NestedData key={uuidv4()} data={e} />
                ))}
            </div>
        )
    );

    let rowPlyersHome = [
        <div key={uuidv4()} className='divTableRow'>
            {Object.keys(away_batters[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    home_batters.map(obj =>
        rowPlyersHome.push(
            <div key={uuidv4()} className='divTableRow'>
                {Object.values(obj).map(e => (
                    <NestedData key={uuidv4()} data={e} />
                ))}
            </div>
        )
    );

    return (
        <div>
            <h1> Away Batters Stats </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowPlyersAway}</div>
            </div>
            <h1> Home Batters Stats </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowPlyersHome}</div>
            </div>
        </div>
    );
};

export default Batters;

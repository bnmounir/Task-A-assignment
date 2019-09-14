import React from 'react';
import NestedData from './NestedData';
import uuidv4 from 'uuid/v4';
// key={uuidv4()}

const Pitchers = props => {
    let away_pitchers = props.RawData.away_pitchers;
    let home_pitchers = props.RawData.home_pitchers;

    let rowPlyersAway = [
        <div key={uuidv4()} className='divTableRow'>
            {Object.keys(away_pitchers[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    away_pitchers.map(obj =>
        rowPlyersAway.push(
            <div key={uuidv4()} className='divTableRow'>
                {Object.values(obj).map(e =>
                    typeof e === 'boolean' ? (
                        e === true ? (
                            <NestedData key={uuidv4()} data={'Yes'} />
                        ) : (
                            <NestedData key={uuidv4()} data={'No'} />
                        )
                    ) : (
                        <NestedData key={uuidv4()} data={e} />
                    )
                )}
            </div>
        )
    );

    let rowPlyersHome = [
        <div key={uuidv4()} className='divTableRow'>
            {Object.keys(away_pitchers[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    home_pitchers.map(obj =>
        rowPlyersHome.push(
            <div key={uuidv4()} className='divTableRow'>
                {Object.values(obj).map(e =>
                    typeof e === 'boolean' ? (
                        e === true ? (
                            <NestedData key={uuidv4()} data={'Yes'} />
                        ) : (
                            <NestedData key={uuidv4()} data={'No'} />
                        )
                    ) : (
                        <NestedData key={uuidv4()} data={e} />
                    )
                )}
            </div>
        )
    );

    return (
        <div>
            <h1> Away pitchers Stats </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowPlyersAway}</div>
            </div>
            <h1> Home pitchers Stats </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowPlyersHome}</div>
            </div>
        </div>
    );
};

export default Pitchers;

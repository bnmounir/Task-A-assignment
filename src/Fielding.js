import React from 'react';
import NestedData from './NestedData';
import uuidv4 from 'uuid/v4';
// key={uuidv4()}

const Fielding = props => {
    let away_fielding = props.RawData.away_fielding;
    let home_fielding = props.RawData.home_fielding;

    let rowPlyersAway = [
        <div key={uuidv4()} className='divTableRow'>
            {Object.keys(away_fielding[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    away_fielding.map(obj =>
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
            {Object.keys(away_fielding[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    home_fielding.map(obj =>
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
            <h1> Away fielding Stats </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowPlyersAway}</div>
            </div>
            <h1> Home fielding Stats </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowPlyersHome}</div>
            </div>
        </div>
    );
};

export default Fielding;

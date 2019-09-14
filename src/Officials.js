import React from 'react';
import NestedData from './NestedData';
import uuidv4 from 'uuid/v4';
// key={uuidv4()}

const Officials = props => {
    let officials = props.RawData.officials;

    let rowOfficials = [
        <div key={uuidv4()} className='divTableRow'>
            {Object.keys(officials[0]).map(e => (
                <NestedData key={uuidv4()} data={e} />
            ))}
        </div>
    ];

    officials.map(obj =>
        rowOfficials.push(
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
            <h1> Officials </h1>
            <div className='divTable'>
                <div className='divTableBody'>{rowOfficials}</div>
            </div>
        </div>
    );
};

export default Officials;

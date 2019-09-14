import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import NestedData from './NestedData';

import Raw from './data.json';

import './MainData.css';

// let { away_team, home_team } = Raw;

// some hard-coding until finding a better solution

let team_indices = Object.keys(Raw.away_team);
let away_team = Object.values(Raw.away_team);
let home_team = Object.values(Raw.home_team);

export default class MainData extends Component {
    render() {
        let tableBoard = [];
        let rowHeader = [
            <NestedData key={uuidv4()} data={'Indices'} />,
            ...team_indices.map(e => <NestedData key={uuidv4()} data={e} />)
        ];
        let rowAway = [
            <NestedData key={uuidv4()} data={'Team Away'} />,
            ...away_team.map(e =>
                typeof e === 'boolean' ? (
                    e === true ? (
                        <NestedData key={uuidv4()} data={'Yes'} />
                    ) : (
                        <NestedData key={uuidv4()} data={'No'} />
                    )
                ) : (
                    <NestedData key={uuidv4()} data={e} />
                )
            )
        ];
        let rowHome = [
            <NestedData key={uuidv4()} data={'Team Home'} />,
            ...home_team.map(e =>
                typeof e === 'boolean' ? (
                    e === true ? (
                        <NestedData key={uuidv4()} data={'Yes'} />
                    ) : (
                        <NestedData key={uuidv4()} data={'No'} />
                    )
                ) : (
                    <NestedData key={uuidv4()} data={e} />
                )
            )
        ];
        tableBoard.push(
            <div key={uuidv4()} className='divTableRow'>
                {rowHeader}
            </div>
        );
        tableBoard.push(
            <div key={uuidv4()} className='divTableRow'>
                {rowAway}
            </div>
        );
        tableBoard.push(
            <div key={uuidv4()} className='divTableRow'>
                {rowHome}
            </div>
        );

        return (
            <div>
                <h1> League Name: {Raw.league}</h1>
                <div className='divTable'>
                    <div className='divTableBody'>{tableBoard}</div>
                </div>
            </div>
        );
    }
}

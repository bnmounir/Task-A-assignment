import React from 'react';
import uuidv4 from 'uuid/v4';
import NestedData from './NestedData';
import Raw from './data.json';

import { Button, Modal } from 'react-bootstrap';

function ErrorModal() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                Error Details
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Error Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>home: {Raw.away_errors}</h5>
                    <h5>home: {Raw.home_errors}</h5>
                </Modal.Body>
            </Modal>
        </>
    );
}

const ScoreBoard = props => {
    let scoreAway = [...props.RawData.away_period_scores];
    let scoreHome = [...props.RawData.home_period_scores];
    let tableBoard = [];
    let rowAway = [
        <NestedData key={uuidv4()} data={'Away'} />,
        ...scoreAway.map(e => <NestedData key={uuidv4()} data={e} />)
    ];
    let rowHome = [
        <NestedData key={uuidv4()} data={'Home'} />,
        ...scoreHome.map(e => <NestedData key={uuidv4()} data={e} />)
    ];
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
            <h1>Score board</h1>
            <div className='divTable'>
                <div className='divTableBody'>{tableBoard}</div>
            </div>
            <br />
            <ErrorModal />
            <br />
        </div>
    );
};

export default ScoreBoard;

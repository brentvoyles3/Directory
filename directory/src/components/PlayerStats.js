import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PlayerStats(props) {
    const [fname, setfName] = useState(props.fname);
    const [lname, setlName] = useState(props.lname);
    const [position, setPosition] = useState(props.role);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
                See Stats
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> {props.fname + " " + props.lname + " (" + props.position + ")"} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            handleClose();
                            e.preventDefault();
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Points: {6.9}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <label
                                 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                 for="name">
                                    {/*{props.fname} Replace with points  pulled from api*/}
                                 </label>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Rebounds: {6.9}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <label
                                 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                 for="name">
                                     {/*{props.fname} Replace with points  pulled from api*/}
                                 </label>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Assists: {6.9}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <label
                                 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                 for="name">
                                     {/*{props.fname} Replace with points  pulled from api*/}
                                     
                                    </label>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Blocks: {6.9}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <label
                                 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                 for="name">
                                    {/*{props.fname} Replace with points  pulled from api*/}
                                 </label>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Steals: {6.9}
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <label
                                 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                 for="name">
                                  {/*{props.fname} Replace with points  pulled from api*/}
                                 </label>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <p classname="test">Scheat Pick: </p>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PlayerStats;
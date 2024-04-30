import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


function AddPlayer(props) {
    const [fname, setfName] = useState(props.fname);
    const [lname, setlName] = useState(props.lname);
    const [position, setPosition] = useState(props.position);
    const [img, setImg] = useState(props.img);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="AddButton">
        <button
                onClick={handleShow}
                className="px-4 py-1 text-sm bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-purple hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
                Add Player
            </button>
        </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            props.newPlayer(props.id, fname, lname, position, img);
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="fname"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="fname"
                                    type="text"
                                    value={fname}
                                    onChange={(e) => {
                                        setfName(e.target.value);
                                    }}
                                />  
                            </div>
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="lname"
                                >
                                    Last Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="lname"
                                    type="text"
                                    value={lname}
                                    onChange={(e) => {
                                        setlName(e.target.value);
                                    }}
                                />
                             
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="position"
                                >
                                    Position
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="position"
                                    type="text"
                                    value={position}
                                    onChange={(e) => {
                                        setPosition(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="img"
                                >
                                    Image:
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="img"
                                    type="text"
                                    value={img}
                                    onChange={(e) => {
                                        setImg(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        form="editmodal"
                    >
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddPlayer;
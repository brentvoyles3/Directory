import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


function RemovePlayer(props) {
    const [fname, setfName] = useState(props.fname);
    const [lname, setlName] = useState(props.lname);
    const [position, setPosition] = useState(props.position);
    const [img, setImg] = useState(props.img);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="RemoveButton">
        <button
                onClick={handleShow}
                className="px-4 py-1 text-sm bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-purple hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
                Remove Player
            </button>
        </div>
        </>
    );
}

export default RemovePlayer;

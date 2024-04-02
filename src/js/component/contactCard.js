import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { store, actions } = useContext(Context);
    const handleDelete = () => {
        // Function for deleting contact
        actions.deleteContact(props.contactID);
        // Hide the modal after deleting the contact
        setShowModal(false);
    };
    return (
        <div className="container">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4HZaE7lO6n2BqQjof6G42b-g0cmTWJEmFw&usqp=CAU"></img>
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <div className="iconinfo">
                    <i className="fa-solid fa-location-dot"></i>
                    <span> {props.address}</span>
                </div>
                <div className="iconinfo">
                    <i className="fa-solid fa-phone"></i>
                    <span> {props.phone}</span>
                </div>
                <div className="iconinfo">
                    <i className="fa-solid fa-envelope"></i>
                    <span> {props.email}</span>
                </div>
            </div>
            <div className="rightIcons">
                <Link to={"/edit/" + props.idx}>
                    <button className="btn btn-outline-black">
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                </Link>

                <button onClick={() => setShowModal(true)} className="btn btn-outline-black" ><i className="fa-solid fa-trash-can fa-1x"></i></button>

                <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm deleting</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ¿Are you sure for deleting the contact?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
            </div>
        </div>



    )
}

export default ContactCard
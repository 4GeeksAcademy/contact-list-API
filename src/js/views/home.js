/* import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import iconProfile from "../../img/iconProfile.png";
import { Link } from "react-router-dom";

export const Home = props => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAgenda();
    }, []);

    return (
		<div className="col-md-12 d-flex justify-content-center align-items-center">
		<div className="row">
			{store.agenda.map((contact, index) => (
				<div className="col-md-4" key={index}>
					<div className="card mb-3" style={{ maxWidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src={iconProfile} className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{props.contact.full_name}</h5>
									<p className="card-text">{props.contact.phone}</p>
									<p className="card-text">{props.contact.email}</p>
									<p className="card-text">{props.contact.address}</p>
									
								</div>
							</div>
						</div>
					</div>
					<div className=" float-right">
						<Link to={"/edit/" + props.contact.id}>
							<button className="btn" onClick={() => actions.getContact(props.contact)}>
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						</div>
				</div>
			))}
			
		</div>
			

        </div>
		
		
    );
};
 */
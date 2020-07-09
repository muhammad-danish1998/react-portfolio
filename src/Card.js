import React from 'react'
import { NavLink } from 'react-router-dom'
import { WebsiteWork } from "./WebsiteWork";


export const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 max-auto'>
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="/WebsiteWork" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

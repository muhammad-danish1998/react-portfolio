import React from 'react'
import { NavLink } from 'react-router-dom'
import web from './web.jpg';
export const Common = (props) => {
    return (
        <div>
             <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>{props.name}
                                    <strong className='brand-name'> Muhammad Danish</strong>
                                    </h1>
                                    <h2 className='my-3'>Hi, We are a team of professional 
                                    web developer with over 5 years of competitive industry
                                     experience. We can create the interactive front end design, 
                                     back end development, SQL database development. Our first priority
                                      is to provide the quality work within deadline. We had done many projects
                                       in business websites and E commerce industry. We always
                                     keen to work with the new challenging projects.</h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>
                                            {props.btnName}
                                </NavLink>
                                    </div>
                                </div>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <img src={props.imgsrc} className='img-fluid animated' alt='home image' style={{borderRadius:'20%'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

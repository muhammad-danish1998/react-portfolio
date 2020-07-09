import React from 'react'
import { NavLink } from 'react-router-dom'
import web from './web.jpg';
import { Common } from "./Common";


export const Home = () => {
    return (
        <>
    <Common
    name ='Grow your business with'
    imgsrc={web}
    visit='/service'
    btnName='Get Started'
     />           
        </>)
}

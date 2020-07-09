import React from 'react'
import { NavLink } from 'react-router-dom'
import web from './web.jpg';
import { Common } from "./Common";
export const About = () => {
    return (
        <>
          <Common 
               
    name ='Welcome to About Page'
    imgsrc={web}
    visit='/contact'
    btnName='Contact'
          />  
        </>
    )
}

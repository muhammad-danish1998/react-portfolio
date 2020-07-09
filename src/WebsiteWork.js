import React from 'react'
import corona1 from './corona1.jpg'
import expense from './expense.jpg'
import portfo from './portfo.jpg'
export const WebsiteWork = () => {
    return (<>
        <div className='container-fluid '>
            <h1 className='text-center'>PORTFOLIO</h1>
        </div>
        <div className='portfolio'>
            <div className="card col-4 mx-auto">
            <img src={corona1} class="card-img-top" alt="not found"></img>
                <div className="card-body">
                    <h4 className="card-title">Covid-19 App</h4>
                    <p className="card-text">Covid-19 Application shows the Current Suitation of Corona Virus</p>
                    <a href="http://dull-cobweb.surge.sh/" target='_blank' className="btn btn-primary">Click to Visit</a>
                </div>
            </div>
            <div className="card col-4 mx-auto">
            <img src={expense} class="card-img-top" alt="not found"></img>
                <div className="card-body">
                    <h4 className="card-title">Expense Tracker App</h4>
                    <p className="card-text">Expense Tracker shows the Expense</p>
                    <a href="http://ruthless-apple.surge.sh/" target='_blank' className="btn btn-primary">Click to Visit</a>
                </div>
            </div>
            <div className="card col-4 mx-auto">
            <img src={portfo} class="card-img-top" alt="not found"></img>
                <div className="card-body">
                    <h4 className="card-title">Portfolio Website</h4>
                    <p className="card-text">PortFolio Website Shows the Business</p>
                    <a href="https://muhammad-danish1998.github.io/work2/" className="btn btn-primary" target='_blank'>Click to Visit</a>
                </div>
            </div>
        </div>
    </>)
}

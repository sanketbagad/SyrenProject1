import React from 'react'
import Dv from '../../Components/Dv/Dv'
import "./data.css"

const Data = () => {
    return (
        <div className='d'>
            <div className='d-nav'>
            <h2 className='d-title'><i class="fas fa-bars"></i>Data Virtualization</h2>
            {/* <p className='d-feed'>Send Feedback <span><i class="fal fa-comments"></i></span></p> */}
            </div>
           
           <Dv />
        </div>
    )
}

export default Data

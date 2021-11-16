import React from 'react'
import "./ct.css"

const Ct = () => {
    return (
        <div className='ct'>
            <div className='ct-nav'>
           <div>
               <span className='icon-1'><i class="fal fa-star"></i></span>
               <h3>WholeSaler Inventory</h3>
           </div>
           <div>
           <span className='icon-2'><i class="fal fa-star"></i></span>
           </div>
            </div>
           <div className='ct-content'>
               <ul>
                   <li>Exception mgmt tool</li>
                   <li>Use Case Management</li>
               </ul>
           </div>

           <a>Learn More</a>
        </div>
    )
}

export default Ct

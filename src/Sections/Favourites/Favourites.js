import React from 'react'
import Fapps from '../../Components/Fapps/Fapps'
import "./fav.css"

const Favourites = () => {
    return (
        <div className='f'>
            <div className='f-nav'>
            <h2 className='f-title'><i class="far fa-star"></i>Favourite Apps</h2>
            <p className='f-feed'>Send Feedback<i class="fas fa-comments"></i></p>
            </div>
           
        <Fapps />
        </div>
    )
}

export default Favourites

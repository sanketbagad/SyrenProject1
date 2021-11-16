import React from 'react'
import "./fav.css"

const Favourites = () => {
    return (
        <div className='f'>
            <div className='f-nav'>
            <h2 className='f-title'><span><i class="fal fa-star"></i></span> Favourite Apps</h2>
            <p className='f-feed'>Send Feedback <span><i class="fal fa-comments"></i></span></p>
            </div>
           
        </div>
    )
}

export default Favourites

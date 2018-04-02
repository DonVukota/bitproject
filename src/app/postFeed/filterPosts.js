import React from 'react'
import { Link } from 'react-router-dom'

const FilterFeed = (props) => {

    return (

        <div className="dropDown">
            <ul>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Sort Feed</a>


                <ul id='dropdown1' className='dropdown-content'>
                    <li onClick={props.showFiltered} data-type="text">Only Text Posts</li>
                    <li onClick={props.showFiltered} data-type="image">Only Image Posts</li>
                    <li onClick={props.showFiltered} data-type="video">Only Video Posts</li>
                    <li onClick={props.showFiltered} data-type="all">All</li>

                </ul>
            </ul>
        </div>)
}

export { FilterFeed }
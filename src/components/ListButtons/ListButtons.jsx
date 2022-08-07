import React from 'react'
import './ListButtons.css'


function ListButtons({ value, id, keyValue, className, handleClick }) {
    return (
        <li >
            <button
                key={keyValue}
                className={className}
                onClick={handleClick}
                id={id}>
                {value}
            </button>
        </li>
    )
}

export default ListButtons
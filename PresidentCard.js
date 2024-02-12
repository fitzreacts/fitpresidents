import React from 'react';
import './PresidentCard.css'

export default function PresidentCard({
                                          name,
                                          term,
                                          photo,
                                          about,
                                          status
                                      }) {

    return (
        <div className="president-wrapper">
            <img src={`/images/${photo}`} alt={name}/>
            <h2>{name}</h2>
            <h3>{term}</h3>
            <p>{about}</p>

            <p className="president-status">{status}</p>
        </div>
    )
}
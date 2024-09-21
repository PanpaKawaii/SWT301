import React, { Component } from 'react'
import './ContentPresentation.css';
import { useState } from 'react';

export default function ContentPresentation({ playerData }) {
    const [player, setPlayer] = useState([]);

    const setplayer = (player) => {
        setPlayer(player);
    }

    return (
        <>
            <div className="image-row">
                {playerData.slice(0, 3).map((player, index) => (
                    <div key={index} className="image-card">
                        <img src={player.img} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p>{player.club}</p>
                        <p><button className='btn' onClick={() => setplayer(player)}><a href="#popup1" id="openPopUp">Detail</a></button></p>
                    </div>
                ))}
            </div>
            <div className="image-row">
                {playerData.slice(3, 6).map((player, index) => (
                    <div key={index} className="image-card">
                        <img src={player.img} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p>{player.club}</p>
                        <p><button className='btn' onClick={() => setplayer(player)}><a href="#popup1" id="openPopUp">Detail</a></button></p>
                    </div>
                ))}
            </div>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <img src={player.img} />
                    <h2>{player.name}</h2>
                    <a className="close" href="#">&times;</a>
                    <p>{player.info}</p>
                </div>
            </div>
        </>
    )
}
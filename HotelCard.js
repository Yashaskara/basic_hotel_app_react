import React from 'react';
import './HotelCard.css';
const HotelCard = (props) => {

    const {hotelName="Hotel 1", hotelImage="", hotelRating="4", hotelCuisines=["Biryani", "Kebab", "Burger"]} = props;
    return (
        <div className='hotel-card-container'>
            <img src={hotelImage} className='hotel-card-image'></img>
            <div className='hotel-card-title'>{hotelName}</div>
            <div className='hotel-card-other-details'>
                <div>{hotelRating}</div>
                <div>{hotelCuisines.join(", ")}</div>
            </div>
        </div>
    );
}

export default HotelCard;



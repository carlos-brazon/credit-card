import React from 'react'

export const StarsRating = ({rating}) => {
    const stars = [];
    for (let i = 1; i <=5 ; i++) {
    i<=rating ? stars.push(<i className="fa-solid fa-star"></i>) : stars.push(<i className="fa-regular fa-star"></i>)
    }
  return stars
}

import { StarsRating } from "./Stars";

export default function printUserCard({person:{name, rating, gender, job, city}}) {
      
    return (
        <div className='userCard flex'>
            <h2>{name}</h2>
            <div className="ratingStar">
              <StarsRating rating={rating} />
            </div>
            <p>{gender}</p>
            <p>{job}</p>
            <p>{city}</p>
        </div>
    );
}
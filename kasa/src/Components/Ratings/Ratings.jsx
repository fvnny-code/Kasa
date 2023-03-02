import React from "react";
import emptyStar from '../../Assets/emptyStar.svg';
import fullStar from '../../Assets/star-rate.svg'

export default function Ratings({ score }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rating">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src={fullStar}
                        alt="rating star" />

                ) : (
                    <img
                        key={level.toString()}
                        className="star"
                        src={emptyStar}
                        alt="rating star" />
                )
            )}
        </div>
    );
}
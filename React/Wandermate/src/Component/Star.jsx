import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div style={{ display: "flex", flexDirection: "row" ,gap:"15px"}}>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <label key={index} style={{ cursor: "pointer" }}>
                        <input 
                            type="radio" 
                            name="rate" 
                            value={currentRate} 
                            onClick={() => setRating(currentRate)}
                            style={{ display: "none" }} // Hide the radio input
                        />
                        <FaStar 
                            size={30} 
                            color={currentRate <= (hover || rating) ? "yellow" : "gray"} 
                            onMouseEnter={() => setHover(currentRate)} // Highlight stars on hover
                            onMouseLeave={() => setHover(null)} // Remove highlight on mouse leave
                        />
                    </label>
                );
            })}
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MainCard = ({ item }) => {
    return (
        <div className="h-[400px] w-full bg-white shadow-lg p-4 my-5 flex">
            <img src={item.image} alt="" className="w-1/2 h-full rounded-md object-cover" />
            <div className="ml-4 flex flex-col justify-center items-center flex-grow">
                <h1 className="text-2xl mb-2 font-bold text-center">{item.name}</h1>
                <h2 className="text-2xl font-bold text-center">${item.price}</h2>
                <button className="bg-blue-500 w-[150px] h-[40px] mt-3 text-2xl rounded-lg text-white">
                    <Link to={`/hotel/${item.id}`} className="flex items-center justify-center h-full w-full">View Deal</Link>
                </button>
                {item.freeCancellation ? (
                    <p className="text-green-600 font-bold text-xl mt-4 text-center">&#10003; Free Cancellation</p>
                ) : (
                    <p className="text-red-500 font-bold text-xl mt-4 text-center">&#10006; No Free Cancellation</p>
                )}
                {item.reserveNow ? (
                    <p className="text-green-500 text-xl mt-4 text-center">&#10003; Reserve Now, Pay Later</p>
                ) : (
                    <p className="text-red-500 text-xl mt-4 text-center">&#10003; Reserve Now, Pay Now</p>
                )}
                <div className="mt-8">
                    <StarRating rating={item.rating} />
                </div>
            </div>
        </div>
    );
};

export default MainCard;

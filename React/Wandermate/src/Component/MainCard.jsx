import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MainCard = ({ item }) => {
    return (
        <div className="h-[400px] w-full bg-white shadow-lg p-4 my-5 flex">
            <img src={item.img} alt="" className="w-1/2 h-full rounded-md" />
            <div className="ml-[20px] flex flex-col">
                <h1 className="text-2xl mb-2 ml-[220px] font-bold">{item.name}</h1>
                <h2 className="text-2xl ml-[280px] font-bold">$ {item.price}</h2>
                <button className="bg-blue-500 w-[150px] h-[40px] ml-[230px] mt-3 text-2xl rounded-lg text-white">
                    <Link to={`/hotel/${item.id}`}>View Deal</Link>
                </button>
                {item.freeCancellation && (
                    <p className="text-green-600 font-bold text-xl relative left-[220px] top-4">&#10003; Free Cancellation</p>
                )}
                {!item.freeCancellation && (
                    <p className="text-red-500 font-bold text-xl ml-[200px] mt-[10px]">&#10006; No Free Cancellation</p>
                )}
                {item.reserveNow && (
                    <p className="text-green-500 text-xl relative left-[210px] top-5">&#10003; Reserve Now, Pay Later</p>
                )}
                {!item.reserveNow && (
                    <p className="text-red-500 text-xl relative left-[210px] top-5">&#10003; Reserve Now, Pay Now</p>
                )}
                <div className="ml-[250px] mt-[50px]">
                <StarRating rating = {item.rating}/>
                </div>
            </div>
        </div>
    );
};

export default MainCard;

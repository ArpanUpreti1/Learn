import React from 'react';
import { CiHeart } from "react-icons/ci";

const Card = ({ item }) => {
    const { img, name, price } = item || {};

    return (
        <div className="w-[300px] h-[500px] mt-10 bg-white shadow-md rounded-lg overflow-hidden my-4 transform hover:scale-105 transition-transform duration-500">
            {img ? (
                <img src={img} alt={name || 'Item'} className="w-full h-[400px] object-cover" />
            ) : (
                <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">
                    <span>No Image</span>
                </div>
            )}
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <h2 className="text-xl font-bold">{name || 'Unnamed'}</h2>
                    <CiHeart className="ml-2 text-3xl text-black hover:text-orange-500" />
                </div>
                {price && <p className="text-sm text-gray-700">{price} $</p>}
            </div>
        </div>
    );
};

export default Card;


import React, { useEffect, useState } from 'react';
import v1 from '../assets/Boudha.jpg';
import I1 from '../assets/search.png';
import MainCard from './MainCard';
import Footer from './Footer';
import MainSec from './MainSec'

function TravelPackage() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotelResponse = await fetch("http://localhost:3000/travelPackages");
                
                if (!hotelResponse.ok) {
                    throw new Error("Network Problem");
                }

                const hotelData = await hotelResponse.json();
                console.log(hotelData)
                setHotels(hotelData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="">
                {hotels.map((hotels) => (
                    <MainCard key={hotels.id} item={hotels} />
                ))}
            </div>
            {/* <div className="">
                {hotels.map((hotels) => (
                    <MainSec key={hotels.id} item={hotels} />
                ))}
            </div> */}
            
            <Footer />
        </>
    );
}

export default TravelPackage;

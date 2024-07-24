import React, { useEffect, useState } from 'react';
import v1 from '../assets/Boudha.jpg';
import I1 from '../assets/search.png';
import Card from './Card';
import Footer from './Footer'

function HomePage() {
    const [hotels, setHotels] = useState([]);
    const [things, setThings] = useState([]);
    const [pac, setPac] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotelResponse = await fetch("http://localhost:3000/topDestinations");
                const thingsResponse = await fetch("http://localhost:3000/thingsToDo");
                const pacResponse = await fetch("http://localhost:3000/travelPackages");
                
                if (!hotelResponse.ok || !thingsResponse.ok) {
                    throw new Error("Network Problem");
                }

                const hotelData = await hotelResponse.json();
                const thingsData = await thingsResponse.json();
                const pacData = await pacResponse.json();

                setHotels(hotelData);
                setThings(thingsData);
                setPac(pacData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${v1})`, borderRadius: "15px", height: "550px", marginTop: '0px' }}>
                <div style={{ position: 'absolute', width: '500px', margin: '250px auto 0 auto' }}>


                    <input type="text"
                        style={{ width: "100%", borderRadius: "10px", height: "60px", paddingLeft: '50px', position: "relative", left: "80%", marginTop: "40px" }}
                        placeholder="Search Your Places, Destination" />
                    <img src={I1} alt="Search Icon"
                        style={{ height: "50px", width: "50px", position: 'absolute', top: '47px', left: '830px' }} />
                    <div>

                        <img src={v1} alt="" srcSet="" style={{ height: "50px", width: "50px", marginTop: "220px", borderRadius: "50%", display: "inline-block" }} />
                        <h1 className = "text-3xl "style={{ position: "absolute", marginTop: "220px", display: "inline-block", marginLeft: "20px" }}>Top Destination</h1>
                    </div>
                </div>
            </div>


            <div className="px-0 py-16">
                <div className="grid grid-cols-4 gap-8 mb-16">
                    {hotels.map((hotel) => (
                        <Card key={hotel.id} item={hotel} />
                    ))}
                </div>

                {/* Things to DO Card */}
                <img src={v1} alt="" srcSet="" style={{ height: "50px", width: "50px", marginTop: "30px", borderRadius: "50%", display: "inline-block" }} />
                <h1 className = "text-3xl "style={{ position: "absolute", marginTop: "30px", display: "inline-block", marginLeft: "20px" }}>Things To DO</h1>
                <div className="grid grid-cols-4 gap-8">
                    {things.map((thing) => (
                        <Card key={thing.id} item={thing} />
                    ))}
                </div>

                {/* Travel Package Card */}
                <img src={v1} alt="" srcSet="" style={{ height: "50px", width: "50px", marginTop: "30px", borderRadius: "50%", display: "inline-block" }} />
                <h1 className = "text-3xl "style={{ position: "absolute", marginTop: "30px", display: "inline-block", marginLeft: "20px" }}>Travel Package</h1>
                <div className="grid grid-cols-4 gap-8">
                    {pac.map((pac) => (
                        <Card key={pac.id} item={pac} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRate from './Star';

const MainSec = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [review, setReview] = useState(null);
    const [error, setError] = useState(null);

    // function click(){
    //     return(
    //         <>
    //         <span>

    //         </span>
    //         </>
    //     )
    // }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotelResponse = await fetch(`http://localhost:3000/hotels/${id}`);
                const reviewResponse = await fetch(`http://localhost:3000/reviews/${id}`);
                if (!hotelResponse.ok) {
                    throw new Error("Network Problem");
                }
                const hotelData = await hotelResponse.json();
                const reviewData = await reviewResponse.json();
                setHotel(hotelData);
                setReview(reviewData);
            } catch (error) {
                setError(error.message);
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!hotel) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", margin: "10px" }}>
            <h1 className='text-center text-4xl font-bold mt-2 mb-3 text-orange-400 '>{hotel.name}</h1>   
            <div style={{ display: "flex" }}>
                <div style={{ flex: "1 0 50%" }}>
                    <img className="w-full h-[550px] rounded-md" src={hotel.img} alt="" />
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
                        <li style={{ textDecoration: "none", listStyle: "none" }}>About</li>
                        <li style={{ textDecoration: "none", listStyle: "none" }}>Location</li>
                        <li style={{ textDecoration: "none", listStyle: "none" }}>Review</li>
                    </div>
                </div>
                <div className="ml-[10px]" style={{ display: 'flex', flexDirection: 'column', flex: "1 0 50%", gap: "10px" }}>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <img className='w-[120px] h-[270px] ml-[0] rounded-md' src={hotel.img} alt="" style={{ flex: "1 0 50%" }} />
                        <img className='w-[120px] h-[270px] rounded-md' src={hotel.img} alt="" style={{ flex: "1 0 50%", }} />
                    </div>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <img className='w-[120px] h-[270px] ml-[0] rounded-md' src={hotel.img} alt="" style={{ flex: "1 0 50%" }} />
                        <img className='w-[120px] h-[270px] rounded-md' src={hotel.img} alt="" style={{ flex: "1 0 50%", }} />
                    </div>
                </div>
            </div>
            <div className="shadow-lg w-full mt-5 p-5 bg-white">
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-4xl font-bold'>{hotel.rating}</h1>
                    <p className='text-justify leading-relaxed'>{hotel.desc}</p>
                    <button className='bg-blue-500 text-2xl rounded-md text-white font-bold p-2 w-full max-w-[900px] h-[50px]'>Book Now</button>
                </div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79656.9461908153!2d140.13662430995663!3d35.40923509576115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022a183bd47d66f%3A0xc5161ad09400b187!2sNanso%20Country%20Club!5e0!3m2!1shi!2snp!4v1721273675766!5m2!1shi!2snp"
                    width="1260"
                    height="450"
                    style={{ border: 0, marginTop: "20px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="shadow-md my-10">
                <h1 className="text-3xl font-bold">Reviews</h1>
                

            </div>
            <div className="shadow-md">
                <h1 className="text-3xl font-bold" >Write a Review</h1>
                <p className="text-xl mt-2">Your Review</p>
                <input className='w-full h-[100px] mt-5 mb-5 rounded-md p-2 shadow-lg' type="text" placeholder="Review" />
                <h1 className="text-2xl font-medium m-4">Your Rating</h1>
              <StarRate/>
              
               

            </div>
        </div>
    );
};

export default MainSec;

import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Destination() {
    const [desc, setDesc] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const descResponse = await fetch("http://localhost:3000/destination");

                if (!descResponse.ok) {
                    throw new Error("Network Problem");
                }

                const descData = await descResponse.json();

                setDesc(descData);
                console.log(descData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (desc.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % desc.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [desc]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + desc.length) % desc.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % desc.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="max-w-[1300px] h-[520px] w-full m-auto py-4 relative overflow-hidden group">
            {desc.map((item, index) => (
                <div
                    key={index}
                    style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    className={`w-full h-full rounded-2xl bg-cover duration-500 absolute top-0 left-0 transition-opacity ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <span className="relative left-[910px] mt-5 w-[330px] h-[60px] pl-2 pt-2 bg-gray-200" style={{color:"black", fontSize:"30px",fontWeight:"600",borderRadius:"5px",display:"inline-block"}}>Explore <span style={{color:"orange"}}>{item.title}</span></span>
                    {/* You can add more content here based on your data structure */}
                </div>
            ))}
           
            {/* Left Arrow */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-black bg-white bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <BsChevronCompactLeft size={30} onClick={handlePrevClick} />
            </div>
            {/* Right Arrow */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-black bg-white bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <BsChevronCompactRight size={30} onClick={handleNextClick} />
            </div>
             {/* Pagination Dots */}
             <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                {desc.map((item, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full bg-white cursor-pointer mx-1 ${index === currentIndex ? 'bg-orange-500' : 'bg-orange-400'}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
        
    );
}

export default Destination;

import React from 'react'
import Video1 from "../assets/Video1.mp4"
import Video2 from "../assets/Video2.mp4"
const HeroSection = () => {
  return (
    
    <div>
      <div className="flex flex-col items-center">
        <h3 className="tracking-wide text-xl">The Country Of Himalays</h3>
        <p className="text-7xl font-bold mt-5">
        <span className="text-orange-500">NEP</span><span class="text-black">AL</span>
    </p>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src = {Video1} type="video/mp4"></source>
        </video>

        <video autoPlay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src = {Video2} type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}

export default HeroSection

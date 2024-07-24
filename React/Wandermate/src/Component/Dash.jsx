import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashHotel from '../Dash/DashHotel';
import DashTravel from '../Dash/DashTravel';
import Booking from '../Dash/Booking';
import User from '../Dash/User';

const Dash = () => {
    return (
        <div className="flex overflow-y-hidden fixed">
            <SideBar />
            <div className='flex justify-center ml-[120px] p-4'>
                <Path />
            </div>
        </div>
    )
}
export default Dash;

const Path = () => {
    return (
        <div>
            <Routes>
                <Route path='dashHotel' element={<DashHotel />} />
                <Route path='dashTravel' element={<DashTravel />} />
                <Route path='book' element={<Booking />} />
                <Route path='user' element={<User />} />
            </Routes>
        </div>
    )
}

const SideBar = () => {
    return (
        <div className="fixed top-[116px] left-0 w-[250px] bg-black text-white">
            <div className="flex flex-col">
                <h1 className="bg-gray-400 p-3 text-2xl font-bold text-center">Dash Board</h1>
                <ul className="flex flex-col gap-[113px] text-center text-xl p-3 mt-[20px] mb-[20px]">
                    <li className="mt-2 hover:bg-gray-200 hover:text-black"> <Link to="dashHotel">Hotel</Link>  </li>
                    <li className="mt-2 hover:bg-gray-200 hover:text-black"><Link to="dashTravel">Travel Package</Link></li>
                    <li className="mt-2 hover:bg-gray-200 hover:text-black"><Link to="book">Bookings</Link></li>
                    <li className="mt-2 hover:bg-gray-200 hover:text-black"><Link to="user">Users</Link></li>
                </ul>
            </div>
        </div>
    )
}

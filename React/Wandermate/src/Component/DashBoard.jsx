import React, { useState, useEffect } from 'react';
import v1 from '../assets/work.jpg';
import v2 from '../assets/836.jpg';

function DashBoard() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || 'UserName');
  const [bio, setBio] = useState(localStorage.getItem('bio') || 'Add Bio Here');

  
  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('bio', bio);
  }, [username, bio]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newUsername = form.username.value;
    const newBio = form.bio.value;
    setUsername(newUsername);
    setBio(newBio);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div className="h-[350px] w-full shadow-md relative rounded-lg">
        <img className="h-full w-full rounded-lg" src={v1} alt="" />
        <img
          className="absolute top-[240px] left-[200px] h-[200px] w-[200px] rounded-full"
          src={v2}
          style={{ border: '2px solid gray' }}
          alt=""
        />

        <button
          onClick={handleEditClick}
          className="absolute right-20 mt-7 text-xl rounded-2xl px-5 py-1 font-medium transition ease-in-out delay-150 bg-white-500 hover:-translate-y-0.5 hover:bg-orange-500 duration-200"
          style={{ border: '1px solid black' }}
        >
          Edit Profile
        </button>
      </div>

      <div className="mt-[150px]">
        <h2 className="text-2xl  text-orange-500 inline-block px-3 rounded-lg font-bold m-2">{username}</h2>
        <p className="p-2 text-gray-600">{bio}</p>
        {isEditing && (
        <div className="mt-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-2">Edit Profile</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-xl font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                defaultValue={username}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                defaultValue={bio}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
        <h2 className="m-2 text-xl font-medium">Hotel Booking</h2>
        <div className="shadow-lg h-[250px] w-full mt-4 rounded-md"></div>
        <h2 className="text-xl font-medium m-2">Travel Packages and Booking</h2>
        <div className="shadow-lg h-[250px] w-full mt-4 rounded-md"></div>
      </div>
    </div>
  );
}

export default DashBoard;

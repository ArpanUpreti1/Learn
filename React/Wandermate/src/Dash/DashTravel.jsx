import React, { useEffect, useState } from "react";

const DashTravel = () => {
  const [travels, setTravels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTravel, setNewTravel] = useState({
    name: '',
    price: '',
    img: '',
    desc: ''
  });

  useEffect(() => {
    const loadHotelFromLocal = () => {
      const storedHotels = localStorage.getItem('travels');
      if (storedHotels) {
        setTravels(JSON.parse(storedHotels));
      } else {
        console.error("No travels found in local storage.");
      }
    };

    loadHotelFromLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem('travels', JSON.stringify(travels));
  }, [travels]);

  const sliceDescription = (desc) => {
    const words = desc.split(' ');
    return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : desc;
  };

  const sliceImg = (img) => {
    const words = img.split('');
    return words.length > 50 ? words.slice(0, 30).join('') + '...' : img;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTravel(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    if (!newTravel.name || !newTravel.price || !newTravel.img) {
      alert("Please fill out all required fields.");
      return;
    }
    const updatedHotel = { id: Date.now(), ...newTravel };
    setTravels(prevHotels => [...prevHotels, updatedHotel]);
    setShowForm(false);
    setNewTravel({
      name: '',
      price: '',
      img: '',
      desc: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  const handleDelete = (id) => {
    setTravels(travels.filter(travel => travel.id !== id));
  };

  return (
    <>
      <div className="ml-[10px] p-4">
        <div>
          <button onClick={() => setShowForm(true)}
            type="button"
            className="bg-blue-500 text-white p-2 rounded w-[150px] mb-4"
          >
            Add Travel
          </button>
        </div>

        <table className="min-w-full bg-gray-400 border border-gray-500">
          <thead>
            <tr className="py-2 px-4 border-b">
              <th className="px-4">Id</th>
              <th className="px-4">Name</th>
              <th className="px-4">Price</th>
              <th className="px-4">Image</th>
              <th className="px-4">Description</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {travels.map((travel) => (
              <tr className="py-2 px-4 border-b" key={travel.id}>
                <td className="py-2 px-4 border-b">{travel.id}</td>
                <td className="py-2 px-4 border-b">{travel.name}</td>
                <td className="py-2 px-4 border-b">${travel.price}</td>
                <td className="py-2 px-4 border-b">
                  <img src={travel.img} alt={travel.name} />
                </td>
                <td className="py-2 px-4 border-b">{sliceDescription(travel.desc)}</td>
                <td className="border px-4 py-2">
                  <button className="bg-black hover:bg-orange-400 text-white font-bold py-1 px-2 rounded mt-3 w-[80px]">Edit</button>
                  <button onClick={() => handleDelete(travel.id)} className="bg-black hover:bg-orange-400 text-white ml-4 font-bold py-1 px-2 rounded mt-3 w-[80px]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2 className="text-2xl font-bold mt-3 mb-3">Add New Travel Package</h2>
          {showForm && (
            <div className="max-h-96 overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col text-2xl">
                  <label htmlFor="">Name</label>
                  <input type="text" onChange={handleChange} name="name" value={newTravel.name} className="bg-blue border border-blue-500 mb-3 mt-5 w-full" />
                  <label htmlFor="">Price</label>
                  <input type="number" onChange={handleChange} name="price" value={newTravel.price} className="bg-blue border border-blue-500 mb-3 mt-5 w-full" />
                  <label htmlFor="">Image</label>
                  <input type="text" onChange={handleChange} name="img" value={newTravel.img} className="bg-blue border border-blue-500 mb-3 mt-5 w-full" />
                  <label htmlFor="">Description</label>
                  <input type="text" onChange={handleChange} name="desc" value={newTravel.desc} className="bg-blue border border-blue-500 mb-3 mt-5 w-full" />
                  <br />
                  <div className="flex">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white p-2 rounded w-[100px] mb-4"
                    >
                      Submit
                    </button>
                    <button onClick={() => setShowForm(false)}
                      type="button"
                      className="bg-blue-500 text-white p-2 rounded w-[100px] mb-4 ml-5"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashTravel;

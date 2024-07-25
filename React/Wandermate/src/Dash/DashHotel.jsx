import React, { useState, useEffect } from 'react';

const DashHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: '',
    price: '',
    img: '',
    rating: '',
    freeCancellation: false,
    reserveNow: false,
    desc: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const loadHotelFromLocal = () => {
      const storedHotels = localStorage.getItem('hotels');
      if (storedHotels) {
        setHotels(JSON.parse(storedHotels));
      } else {
        console.error("No hotels found in local storage.");
      }
    };

    loadHotelFromLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(hotels));
  }, [hotels]);

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
    setNewHotel(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    if (!newHotel.name || !newHotel.price || !newHotel.img) {
      alert("Please fill out all required fields.");
      return;
    }

    if (isEditing) {
      const updatedHotels = hotels.map((hotel, index) =>
        index === editIndex ? { ...hotel, ...newHotel } : hotel
      );
      setHotels(updatedHotels);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setHotels(prevHotels => [...prevHotels, newHotel]);
    }

    setShowForm(false);
    setNewHotel({
      name: '',
      price: '',
      img: '',
      rating: '',
      freeCancellation: false,
      reserveNow: false,
      desc: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  const handleDelete = (index) => {
    setHotels(hotels.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setNewHotel(hotels[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className='w-full ml-[10px]'>
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold">Hotels</h1>
        <button 
          className='bg-blue-500 border-none rounded-lg text-2xl font-bold px-2 py-2 mt-2 mb-2 text-white' 
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setNewHotel({
              name: '',
              price: '',
              img: '',
              rating: '',
              freeCancellation: false,
              reserveNow: false,
              desc: ''
            });
          }}
        >
          Add Hotel
        </button>
        <div className="max-h-[1000px] overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-300">
              <tr className='text-2xl text-center'>
                <th className='border px-4 py-2'>#</th>
                <th className='border px-4 py-2'>Name</th>
                <th className='border px-4 py-2'>Price</th>
                <th className='border px-4 py-2'>Img</th>
                <th className='border px-4 py-2'>Reserve Now</th>
                <th className='border px-4 py-2'>Free Cancellation</th>
                <th className='border px-4 py-2'>Desc</th>
                <th className='border px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={index} className='text-center'>
                  <td className='border px-4 py-2'>{index + 1}</td>
                  <td className='border px-4 py-2'>{hotel.name}</td>
                  <td className='border px-4 py-2'>{hotel.price}</td>
                  <td className='border px-4 py-2'>{sliceImg(hotel.img)}</td>
                  <td className='border px-4 py-2'>{hotel.reserveNow ? "Yes" : "No"}</td>
                  <td className='border px-4 py-2'>{hotel.freeCancellation ? "Yes" : "No"}</td>
                  <td className='border px-4 py-2'>{sliceDescription(hotel.desc)}</td>
                  <td className='border px-4 py-2'>
                    <button 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-3 w-[80px]" 
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button 
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-3 w-[80px] ml-5" 
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showForm && (
            <div className="mt-4">
              <h1 className='text-2xl font-bold'>{isEditing ? 'Edit Hotel' : 'Add new Hotel'}</h1>
              <form onSubmit={handleSubmit}>
                <div className='max-h-[300px] overflow-y-auto'>
                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Name</h1>
                  <input 
                    name="name" 
                    value={newHotel.name}
                    onChange={handleChange} 
                    className='w-full text-xl pt-1 pb-1' 
                    type="text"
                    required
                  />

                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Price</h1>
                  <input 
                    name="price" 
                    value={newHotel.price}
                    onChange={handleChange} 
                    className='w-full text-xl pt-1 pb-1' 
                    type="text"
                    required
                  />

                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Image URL</h1>
                  <input 
                    name="img" 
                    value={newHotel.img}
                    onChange={handleChange} 
                    className='w-full text-xl pt-1 pb-1' 
                    type="text"
                    required
                  />

                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Rating</h1>
                  <input 
                    name="rating" 
                    value={newHotel.rating}
                    onChange={handleChange} 
                    className='w-full text-xl pt-1 pb-1' 
                    type="text"
                  />

                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Free Cancellation</h1>
                  <input 
                    name="freeCancellation" 
                    checked={newHotel.freeCancellation}
                    onChange={handleChange} 
                    type="checkbox" 
                  />

                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Reserve Now</h1>
                  <input 
                    name="reserveNow" 
                    checked={newHotel.reserveNow}
                    onChange={handleChange} 
                    type="checkbox" 
                  />

                  <h1 className='text-xl text-gray-500 mt-2 mb-2'>Description</h1>
                  <textarea 
                    name="desc" 
                    value={newHotel.desc}
                    onChange={handleChange} 
                    className='w-full text-xl pt-1 pb-1' 
                    rows="3"
                  />
                </div>
                <button 
                  type="submit" 
                  className='bg-blue-500 border-none rounded-lg text-2xl font-bold px-2 py-2 mt-5 mb-2 text-white'
                >
                  {isEditing ? 'Update Hotel' : 'Save Hotel 👍'}
                </button>
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className='bg-red-500 border-none rounded-lg text-2xl font-bold px-2 py-2 mt-2 mb-2 text-white ml-5'
                >
                  Cancel 👎
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashHotel;

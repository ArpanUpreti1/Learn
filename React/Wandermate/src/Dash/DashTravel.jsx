import React, { useState, useEffect } from 'react';

const DashTravel = () => {
  const [travels, setTravel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const travelResponse = await fetch("http://localhost:3000/travelPackages");

        if (!travelResponse.ok) {
          throw new Error("Network Problem");
        }

        const travelData = await travelResponse.json();
        console.log(travelData);
        setTravel(travelData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const sliceDescription = (desc) => {
    const words = desc.split(' ');
    return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : desc;
  };

  const sliceimg = (img) => {
    const words = img.split('');
    return words.length > 50 ? words.slice(0, 30).join('') + '...' : img;
  };

  const handleEdit = (id) => {

  };

  const handleDelete = (id) => {
    
  };

  return (
    <div className='w-full ml-[10px]'>
      <div className="overflow-x-auto">
        <div className="max-h-[1000px] overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-300">
              <tr className='text-2xl text-center'>
                <th className='px-4 py-2'>ID</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2'>Price</th>
                <th className='px-4 py-2'>Img</th>
             
                <th className='px-4 py-2'>Desc</th>
                <th className='px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {travels.map((travel) => (
                <tr key={travel.id} className='text-center'>
                  <td className='border px-4 py-2'>{travel.id}</td>
                  <td className='border px-4 py-2'>{travel.name}</td>
                  <td className='border px-4 py-2'>{travel.price}</td>
                  <td className='border px-4 py-2'>{sliceimg(travel.img)}</td>
                 
                  <td className='border px-4 py-2'>{sliceDescription(travel.desc)}</td>
                  <td className='border px-4 py-2'>
                    <button onClick={() => handleEdit(travel.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-3">Edit</button>
                    <button onClick={() => handleDelete(travel.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-3">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashTravel;

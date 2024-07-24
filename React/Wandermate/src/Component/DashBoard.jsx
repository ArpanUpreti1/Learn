import v1 from '../assets/work.jpg'
import v2 from '../assets/836.jpg'
function DashBoard(){


    return(
        <div className="">
            <div className="h-[350px] w-full shadow-md relative rounded-lg">
                <img className="h-[350px] w-[1300px] rounded-lg" src={v1} alt="" srcset=""  />
                <img className="absolute top-[240px] left-[200px] h-[200px] w-[200px] rounded-full" src={v2} style={{border:"2px solid gray"}} alt="" srcset="" />
                <button className="absolute right-20 mt-7 text-xl rounded-2xl px-5 py-1 font-medium transition ease-in-out delay-150 bg-white-500 hover:-translate-y-0.5 hover:bg-orange-500 duration-200" style={{border:"1px solid black"}}>Edit Profile</button>

                   
            </div>
            <div className="mt-[150px]">
                <h2 className="text-xl font-medium m-2">UserName</h2>
                <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed vero quasi veritatis atque! Velit eos aperiam quis voluptas! Animi culpa nulla blanditiis incidunt voluptatem.</p>
                <h2 className='m-2 text-xl font-medium'>Hotel Booking</h2>
                <div className="shadow-lg h-[250px] w-full mt-4 rounded-md">

                </div>
                <h2 className="text-xl font-medium m-2">Travel Packages and Booking</h2>
                <div className="shadow-lg h-[250px] w-full mt-4 rounded-md">

                </div>
            </div>  

        </div>
    )
}
export default DashBoard
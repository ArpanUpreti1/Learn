import React from "react";

const Second = () => {
  return (
    <>
      <form action="">
        <h1 className="ml-60 text-blue-500 font-bold text-3xl">Sign In</h1><br />
        <input type="text" className="border border-blue-500 mt-0 ml-40 w-1/3" placeholder="Username" /><br />
        <input type="password" className="bg-blue border border-blue-500 ml-40 mt-5 w-1/3" placeholder="Password" /><br />
        <div className="flex mt-5 ml-40 items-center">
          <input type="checkbox" className="mr-2" />
          <p>Remember Me</p>
        </div>
        <button type="button" className="bg-blue-500 text-white p-2 rounded ml-40 mt-5 w-1/3">Sign In</button>
        <div className="flex ml-40 mt-5">
          <p>New Here?</p>
          <a href="#" className="ml-2 text-blue-500">Sign Up</a>
        </div>
      </form>
    </>
  );
}

export default Second;

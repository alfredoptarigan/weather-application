import React from "react";

function Navbar() {
  return (
    <nav className="py-5 w-full">
      <div className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-lightBlue-900">
          Weather Forecast.
        </a>
        {/* <ul className="flex items-center text-gray-500 font-medium ">
          <li class="mr-3 ml-3 hover:text-gray-600">
            <a href="">Home</a>
          </li>
          <li class="mr-3 ml-3 hover:text-gray-600">
            <a href="">Home</a>
          </li>
          <li class="mr-3 ml-3 hover:text-gray-600">
            <a href="">Home</a>
          </li>
          <li class="mr-3 ml-3 hover:text-gray-600">
            <a href="">Home</a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;

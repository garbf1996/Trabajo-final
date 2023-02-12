import React from "react";
import { NavLink } from "react-router-dom";

const SibarOption = () => {
  return (
    <div className='md:w-2/5 xl:w-1/5 bg-gray-800'>
      <div className='p-6'>
        {" "}
        <p className='uppercase text-white text-2xl tracking-wide text-center font-bold'>
          RestaurabtApp
        </p>
        <p className='mt-3 text-gray-600'>
          Administra tu restaurant en las sigientes opciones:
        </p>
        <nav className='mt-10'>
          <NavLink
            to='/'
            className='block text-gray-400 font-bold p-2 hover:bg-yellow-400 hover:text-gray-900'
          >
            {" "}
            Ordenes
          </NavLink>
          <NavLink
            to='/menu'
            className='block text-gray-400 font-bold p-2 hover:bg-yellow-400 hover:text-gray-900'
          >
            {" "}
            Menu
          </NavLink>
          <NavLink
            to='/nuevo-platillo'
            className='block text-gray-400 font-bold p-2 hover:bg-yellow-400 hover:text-gray-900'
          >
            {" "}
            Nuevo Platillo
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SibarOption;

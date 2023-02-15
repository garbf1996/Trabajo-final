import React from "react";

export const GetPlaitillos = ({ platillo }) => {
  const { nombre, precio, categoria, descripcion } = platillo;

  return (
    <div className='w-full md:w-1/3 xl:w-1/4 p-3'>
      <h3 className='font-bold text-xl mb-3'>
        <a href='#'>{nombre}</a>
      </h3>
      <p className='text-gray-800 font-bold'>
        Precio: <span className='text-gray-600 text-sm'>$ {precio}</span>
      </p>
      <p className='text-gray-800 font-bold'>
        Categoria: <span className='text-gray-600 text-sm'>{categoria}</span>
      </p>
      <p className='text-gray-800 font-bold'>
        Descripcion:{" "}
        <span className='text-gray-600 text-sm'>{descripcion}</span>
      </p>
      <div className='mt-3'></div>
    </div>
  );
};

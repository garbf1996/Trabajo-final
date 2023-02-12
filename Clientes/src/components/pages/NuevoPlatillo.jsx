import React from "react";

const NuevoPlatillo = () => {
  return (
    <>
      <h1 className='text-3xl font-light mb-4'>Nuevo Platillo</h1>

      <div className='flex justify-center mt-10'>
        <div className='w-full max-w-3xl '>
          <form>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='nombre'
              >
                Nombre
              </label>
              <input
                type='text'
                id='nombre'
                placeholder='Nombre Platillo'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Precio{" "}
              </label>
              <input
                type='number'
                id='precio'
                placeholder='$20'
                min='0.00'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Categoria{" "}
              </label>
              <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                <option value=''>-- Seleccione --</option>
                <option value='desayuno'>Desayuno</option>
                <option value='comida'>Comida</option>
                <option value='cena'>Cena</option>
                <option value='bebida'>Bebida</option>
                <option value='postre'>Postre</option>
                <option value='ensalada'>Ensalada</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Image
              </label>
              <input type='file' id='imagen' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Descripcion{" "}
              </label>
              <textarea className=' h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></textarea>
            </div>
            <input
              type='submit'
              className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold'
              value='Agregar Platillo'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlatillo;

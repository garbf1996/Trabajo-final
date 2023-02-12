import React, { useContext } from "react";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../firabase";
//useNavigate
import { useNavigate } from "react-router-dom";
const NuevoPlatillo = () => {
  //Formulario y validacion con formik
  const { firabaseAPP } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre del platillo es obligatorio"),
      precio: Yup.number().required("El precio es obligatorio"),
      categoria: Yup.string().required("La categoria es obligatoria"),
      imagen: Yup.string().required("La imagen es obligatoria"),
    }),
    onSubmit: (datos) => {
      try {
        datos.existencia = true;
        firabaseAPP.db.collection("productos").add(datos);
        navigate("/menu");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <h1 className='text-3xl font-light mb-4'>Nuevo Platillo</h1>

      <div className='flex justify-center mt-10'>
        <div className='w-full max-w-3xl '>
          <form onSubmit={formik.handleSubmit}>
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
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              {formik.touched.nombre && formik.errors.nombre ? (
                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                  <p className='font-bold'>Error</p>
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null}
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
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min='0.00'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                <p className='font-bold'>Error</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Categoria{" "}
              </label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='categoria'
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value=''>-- Seleccione --</option>
                <option value='desayuno'>Desayuno</option>
                <option value='comida'>Comida</option>
                <option value='cena'>Cena</option>
                <option value='bebida'>Bebida</option>
                <option value='postre'>Postre</option>
                <option value='ensalada'>Ensalada</option>
              </select>
            </div>
            {formik.touched.categoria && formik.errors.categoria ? (
              <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                <p className='font-bold'>Error</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Image
              </label>
              <input
                type='file'
                id='imagen'
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {" "}
                Descripcion{" "}
              </label>
              <textarea
                className=' h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='descripcion'
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
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

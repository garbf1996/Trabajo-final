import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firabase";
import { GetPlaitillos } from "../iu/GetPlaitillos";

const Menu = () => {
  const [platillos, guardarPlatillos] = useState([]);
  const { firabaseAPP } = useContext(FirebaseContext);
  useEffect(() => {
    const obtenerPlatillos = () => {
      firabaseAPP.db.collection("productos").onSnapshot(handleSnapshot);
    };
    obtenerPlatillos();
  }, []);

  function handleSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarPlatillos(platillos);
    console.log(platillos);
  }
  return (
    <>
      <h1 className='text-3xl font-light mb-4'>Menu</h1>
      <Link
        to='/nuevo-platillo'
        className=' bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold'
      >
        Regresar Platillo
      </Link>
      {platillos.map((platillo) => (
        <GetPlaitillos key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
};

export default Menu;

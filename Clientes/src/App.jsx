import { Route, Routes } from "react-router";
import Menu from "./components/pages/Menu";
import NuevoPlatillo from "./components/pages/NuevoPlatillo";
import OrdeClients from "./components/pages/OrdeClients";
import SibarOption from "./components/iu/SibarOption";

function App() {
  return (
    <div className='md:flex min-h-screen '>
      <SibarOption />
      <div className='md:w-3/5 xl:w-4/5 p-6 '>
        <Routes>
          <Route path='/' element={<OrdeClients />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/nuevo-platillo' element={<NuevoPlatillo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

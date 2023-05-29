import { Route, Routes } from "react-router-dom";
import Router from "./Router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import 'bootstrap/dist/css/bootstrap.min.css'
import ServiceDetails from "./pages/ServiceDetails";

const serviceTypes = [
  {
    id: 1,
    name: 'Cleaning',
    description: 'Home Cleaning, Office Cleaning, etc'
  },
  {
    id: 2,
    name: 'Washing',
    description: 'Home Washing, Office Washing, etc'
  },
  {
    id: 3,
    name: 'Cooking',
    description: 'Home Cooking, Office Cooking, etc'
  }
]

function App() {
  return (
    <>
     <Router/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="services" element={<Services serviceTypes={serviceTypes}/>} />
        <Route path="services/:id" element={<ServiceDetails serviceTypes={serviceTypes}/>} />
      </Routes>
    </>
  );
}

export default App;

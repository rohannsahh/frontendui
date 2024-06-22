import React, {  useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({pricingRef}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (ref) => {
    if (!ref || !ref.current) return;
    if (window.location.pathname !== '/') {
      navigate('/');
      // setTimeout(() => {
      //   ref.current.scrollIntoView({ behavior: 'smooth' });
      // }, 100);
    } else {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };



   const toggleSidebar = () => { 
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="flex  flex-row items-center justify-between p-4 bg-[#000080] relative">
      <div className="text-white text-3xl font-bold m-1 lg:ml-10 p-1">
        SchengenEase
      </div>
      <nav className="hidden md:flex flex-row items-center">
        <Link to="/" className="mx-2 text-white text-xl m-1 p-1 hover ">
          Home
        </Link>
        <Link to="/know-us" className="mx-2 text-white text-xl m-1 p-1 hover">
          Know Us
        </Link>
        <Link to="/how-it-works" className="mx-2 text-white text-xl m-1 p-1 hover">
          How it Works
        </Link>
        <Link  onClick={() => scrollToSection(pricingRef)} 
 className="mx-2 text-white text-xl m-1 p-1 hover ">
          Pricing
        </Link>
        <Link to="/blogs" className="mx-2 text-white text-xl m-1 p-1 hover">
          Blogs
        </Link>
      </nav>
      <Link to="/login" className="hidden md:block bg-white py-2 px-4 mt-2 md:mt-0 mr-10 rounded-lg text-black text-xl font-semibold hover:bg-gray-200">
        Launch App
      </Link>
      <button className="md:hidden text-white text-3xl" onClick={toggleSidebar}>
        {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="bg-[#000080] h-full w-64 p-4">
          <button className="text-white text-3xl mb-4" onClick={toggleSidebar}>
            <AiOutlineClose />
          </button>
          <nav className="flex flex-col">
            <Link to="/" className="mx-2 text-white text-xl m-1 p-1 hover:text-gray-300" onClick={toggleSidebar}>
              Home
            </Link>
            <Link to="/know-us" className="mx-2 text-white text-xl m-1 p-1 hover:text-gray-300" onClick={toggleSidebar}>
              Know Us
            </Link>
            <Link to="/how-it-works" className="mx-2 text-white text-xl m-1 p-1 hover:text-gray-300" onClick={toggleSidebar}>
              How it Works
            </Link>
            <Link className="mx-2 text-white text-xl m-1 p-1 hover:text-gray-300" onClick={() => scrollToSection(pricingRef)}>
              Pricing
            </Link>
            <Link to="/blogs" className="mx-2 text-white text-xl m-1 p-1 hover:text-gray-300" onClick={toggleSidebar}>
              Blogs
            </Link>
            <Link to="/login" className="bg-white py-2 px-4 mt-2 rounded-lg text-black text-xl font-semibold hover:bg-gray-200" onClick={toggleSidebar}>
              Launch App
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

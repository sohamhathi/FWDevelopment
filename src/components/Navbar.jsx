import { Link } from 'react-router-dom';
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';
import { LuMoon } from "react-icons/lu";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
 

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <Link to='/' className="text-2xl font-bold text-gray-800 dark:text-white">BookStore</Link>
                </div>


                {/* Theme Toggle Button */}
                <div>
                    <button
                        className="mx-4 inline-flex items-center bg-gray-300 border-0 py-1 px-1 focus:outline-none hover:bg-gray-200  text-base rounded-full"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <IoSunny className='flex justify-center align-middle m-2' /> : <LuMoon className='flex justify-center align-middle m-2'/>} 
                    </button>
                </div>

          
                    <div className='mx-2'>
                        <Link to='/login' className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            LogIn
                        </Link>
                    </div>
                
            </div>
        </nav>
    );
};

export default Navbar;

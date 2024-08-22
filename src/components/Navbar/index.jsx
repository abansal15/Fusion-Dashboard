import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaQuestionCircle, FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // You would typically apply the dark mode to your entire app here
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-gradient-to-r ${isDarkMode ? 'from-gray-800 to-gray-900 text-white' : 'from-blue-500 to-purple-600 text-white'} p-4`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">Fusion</span>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="px-3 py-1 rounded-full bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
                <div className="flex items-center space-x-6">
                    <button onClick={toggleDarkMode} className="text-xl">
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    <button className="text-xl">
                        <FaQuestionCircle />
                    </button>
                    <button className="text-xl">
                        <FaCog />
                    </button>
                    <div className="relative">
                        <button onClick={toggleMenu} className="flex items-center space-x-2">
                            <FaUserCircle className="text-2xl" />
                            <span>Ajay</span>
                        </button>
                        {isMenuOpen && (
                            <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Profile</a>
                                <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Settings</a>
                                <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Sign out</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
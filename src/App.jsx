import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Announcements from './components/Announcements';
import fusionImage from './assets/fusion.png';
import { FaBuilding, FaUtensils, FaUniversity, FaMoneyBill, FaExclamationCircle, FaHeartbeat } from 'react-icons/fa';
import { BsGrid, BsFileText } from 'react-icons/bs';
import { VscFileSubmodule } from "react-icons/vsc";

function App() {

  return (
    <>
      <div className='flex flex-row h-screen' style={{ fontFamily: '"DroidArabicKufi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif' }}>

        

        <div className='flex flex-col h-screen w-5/6'>
          <Navbar />
          <div className='flex flex-row w-full h-[calc(100%-64px)]'>
            <div className="flex flex-col w-1/4 h-full justify-between">
              <Profile />
              <Announcements />
            </div>
            <div className='flex w-3/4 overflow-y-scroll'>
              {/* Main Pages Here */}
              <Dashboard />

            </div>
          </div>
        </div>

        <Sidebar 
      className='h-screen fixed' 
      width='16.66%' 
      style={{ 
        background: 'linear-gradient(to right, #6D28D9, #A78BFA)', // More purple gradient
        color: 'black', // Default text color
      }}
    >
      <div className='flex flex-col items-center justify-center h-80 w-full'>
        <div className='h-[80px] w-[80px] bg-white rounded-full text-purple-700 flex items-center justify-center text-4xl'>F</div>
        <div className='mt-5 text-2xl font-bold text-black'>Fusion</div>
        <div className='flex space-x-2 mt-4'>
          <div className='h-4 w-4 bg-white rounded-full'></div>
          <div className='h-4 w-4 bg-white rounded-full'></div>
          <div className='h-4 w-4 bg-white rounded-full'></div>
        </div>
      </div>
      
      <Menu>
        <MenuItem icon={<BsGrid />} className="text-black"> Dashboard </MenuItem>

        {/* Modules are displayed without needing to click to expand */}
        <MenuItem icon={<FaBuilding />} className="text-black"> Hostal </MenuItem>
        <MenuItem icon={<FaUtensils />} className="text-black"> Mess </MenuItem>
        <MenuItem icon={<FaUniversity />} className="text-black"> Department </MenuItem>
        <MenuItem icon={<FaMoneyBill />} className="text-black"> Scholarship </MenuItem>
        <MenuItem icon={<FaExclamationCircle />} className="text-black"> Complains </MenuItem>
        <MenuItem icon={<FaHeartbeat />} className="text-black"> Healthcare </MenuItem>

        <MenuItem icon={<BsFileText />} className="text-black"> Other </MenuItem>
      </Menu>
    </Sidebar>
      </div>

    </>
  );
}

export default App;

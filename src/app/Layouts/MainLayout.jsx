import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
        <h1>Navbar</h1>
   <div>
     <Outlet />
   </div>
    </div>
  );
}

export default MainLayout;

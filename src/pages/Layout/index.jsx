import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/homecomponents/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;

import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>                     
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
       <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
import React from 'react';
import { ReactComponent as Close } from '../assets/icons/close.svg';
import useStatus from '../context/useStatus';

const MobileNav = ({ setOpenNav, openNav }) => {
  const status = useStatus();
  return (
    <div
      className={`fixed inset-x-0 inset-y-0 overflow-y-scroll bg-[#fffcf3] p-5 transform delay-100 transition duration-300 ${
        openNav ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <Close
        className="text-red-400 float-right mt-5 mr-2"
        onClick={() => setOpenNav(!openNav)}
      />
      <div className="clear-right h-fit mt-36">
        <ul className="text-4xl text-black font-bold tracking-wider mb-16 text-center lg:text-left lg:mb-0">
          <li className="mb-7 transition duration-200 ease-linear hover:text-red-400 hover:scale-105">
            <a href="/">Our Menus</a>
          </li>
          <li className="mb-7 transition duration-200 ease-linear hover:text-red-400 hover:scale-105">
            <a href="/">Make a reservation</a>
          </li>
          <li className="mb-7 transition duration-200 ease-linear hover:text-red-400 hover:scale-105">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="w-4/5 bg-red-400 mx-auto mb-16" />
      <div className="mb-20 text-center text-xl tracking-wide text-black btn">
        <p className="mb-4">{status}</p>
        <p className="mb-1">Wed-Fri: 4p-10p</p>
        <p className="mb-1">Sat: 12p-10p</p>
      </div>

      <div className="mb-10 text-center text-xl tracking-wide text-black btn">
        <p className="mb-4">(404)-343-1342</p>
        <p className="mb-1">2317 Cascade Rd. SW Atlanta, GA 30311</p>
      </div>
    </div>
  );
};

export default MobileNav;

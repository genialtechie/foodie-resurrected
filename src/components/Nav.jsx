import React, { useState } from 'react';
import { ReactComponent as Menu } from '../assets/icons/menu.svg';
import MobileNav from './MobileNav';
import useStatus from '../context/useStatus';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const status = useStatus();

  return (
    <div className="relative">
      <nav className="mx-auto hidden lg:block w-4/5 tracking-wider">
        <div className="flex justify-between py-4 border-b border-slate-300 ">
          <ul className="w-fit flex">
            <li className="px-3 font-bold font-sans bg-slate-300/50 rounded-sm text-lg">
              {status}
            </li>
            <li className="px-3">
              Wed-Fri: 4p-10p <span className="text-red-400">+</span> Sat:
              12p-10p
            </li>
          </ul>
          <ul className="w-fit flex">
            <li className="px-3">(404)-343-1342</li>
            <li className="px-3">2317 Cascade Rd. SW Atlanta, GA 30311</li>
          </ul>
        </div>
      </nav>
      <Menu
        className="absolute top-14 right-0 lg:hidden text-red-400"
        onClick={() => setOpenNav(!openNav)}
      />
      {openNav && (
        <MobileNav
          setOpenNav={setOpenNav}
          openNav={openNav}
        />
      )}
    </div>
  );
};

export default Nav;

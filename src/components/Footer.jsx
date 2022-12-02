import React from 'react';
import pattern from '../assets/img/footer-pattern.png';
import useStatus from '../context/useStatus';

const Footer = () => {
  const status = useStatus();
  return (
    <div className="relative h-fit bg-[#fffcf3]">
      <div className="w-4/5 py-10 h-fit bg-[#1B1106] mx-auto relative z-10 my-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-5 lg:px-7">
          <div>
            <ul className="text-3xl font-bold tracking-wider mb-16 text-center lg:text-left lg:mb-0">
              <li className="mb-4 transition duration-200 ease-linear hover:text-red-400 hover:scale-105">
                <a href="/">Our Menus</a>
              </li>
              <li className="mb-4 transition duration-200 ease-linear hover:text-red-400 hover:scale-105">
                <a href="/">Make a reservation</a>
              </li>
              <li className="mb-4 transition duration-200 ease-linear hover:text-red-400 hover:scale-105">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 auto-cols-max lg:grid-rows-3 lg:grid-cols-2 gap-4">
            <div className="text-center lg:text-left">
              <div className="px-5 py-2 mx-auto lg:mx-0 w-fit bg-[#fffcf3] text-[#1b1106] mb-3">
                {status}
              </div>
              <p className="mb-2 btn text-[#fffcf3]">Mon-Thurs: 11am-9pm</p>
              <p className="mb-2 btn text-[#fffcf3]">Fri-Sun: 11am-11pm</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="px-5 py-2 mx-auto lg:mx-0 w-fit bg-[#fffcf3] text-[#1b1106] mb-3">
                Address
              </div>
              <p className="mb-2 btn text-[#fffcf3]">
                2317 Cascade Rd. SW Atlanta, GA 30311
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="px-5 py-2 mx-auto lg:mx-0 w-fit bg-[#fffcf3] text-[#1b1106] mb-3">
                Contact
              </div>
              <p className="mb-2 btn text-[#fffcf3]">P : (404)-343-1342</p>
              <p className="mb-2 btn text-[#fffcf3]">
                E : contact@serenidad.com
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="px-5 py-2 mx-auto lg:mx-0 w-fit bg-[#fffcf3] text-[#1b1106] mb-3">
                Dining
              </div>
              <p className="mb-2 btn text-[#fffcf3]">
                Both walk-ins and reservations are accepted
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="px-5 py-2 mx-auto lg:mx-0 w-fit bg-[#fffcf3] text-[#1b1106] mb-3">
                Takeout
              </div>
              <p className="mb-2 btn text-[#fffcf3]">
                For take out, please{' '}
                <a
                  href="/"
                  className="underline"
                >
                  click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-1/3 w-full bottom-0">
        <img
          src={pattern}
          alt="pattern"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import Nav from './Nav';

const Home = () => {
  return (
    <div className="h-fit bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="h-full p-5 pb-20 bg-slate-900/50">
        <div className="flex flex-col h-full">
          <Nav />
          <header>
            <h1 className="lg:text-center text-xl py-14 tracking-wider">
              <span className="text-5xl font-bold">
                SERENIDAD <br />
              </span>
              Latin Soul Cuisine
            </h1>
          </header>
          <div className="mx-auto w-2/5 py-5">
            <div className="hidden lg:flex justify-around">
              <a
                href="/"
                className="px-6 py-4 bg-slate-500/50 rounded-sm btn transition duration-200 ease-in hover:bg-red-400"
              >
                Cocktail Menu
              </a>
              <a
                href="/"
                className="px-6 py-4 bg-slate-500/50 rounded-sm btn transition duration-200 ease-in hover:bg-red-400"
              >
                Brunch Menu
              </a>
              <a
                href="/"
                className="px-6 py-4 bg-slate-500/50 rounded-sm btn transition duration-200 ease-in hover:bg-red-400"
              >
                Dinner Menu
              </a>
            </div>
          </div>
          <h1 className="mx-auto lg:text-center lg:w-3/5 tracking-wider">
            <div className="py-3 text-xl">
              Cuisine you'll love, all the time <br />
            </div>
            <div className="py-3 text-6xl font-bold">
              Serene Conditions, <br />
            </div>
            <div className="py-3 text-6xl font-bold">Savoury Cuisine.</div>
          </h1>
          <div className="w-fit h-fit lg:mx-auto lg:w-2/5 flex flex-col lg:flex-row justify-around py-6">
            <a
              href="/"
              className="btn transition duration-200 ease-in px-6 py-6 mb-4 border border-slate-400 rounded-sm hover:bg-red-400"
            >
              Make a reservation
            </a>
            <a
              href="/"
              className="btn transition duration-200 ease-in px-6 py-6 mb-4 border border-slate-400 rounded-sm hover:bg-red-400"
            >
              View Menus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

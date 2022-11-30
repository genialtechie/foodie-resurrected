import React from 'react';
import { ReactComponent as Cutlery } from '../assets/icons/cutlery.svg';
import cocktail from '../assets/img/beverage.jpg';
import brunch from '../assets/img/brunch.png';
import dinner from '../assets/img/dinner.png';

const Menu = () => {
  return (
    <div className="h-fit bg-[#fffcf3]">
      <Cutlery className="mx-auto mt-24" />
      <p className="py-14 px-5 lg:px-0 text-black text-3xl text-center">
        Come for our fresh, delicious fare, <br className="hidden md:block" />{' '}
        and stay for a dining experience you won't forget.
      </p>
      <div className="flex flex-col lg:flex-row justify-around items-center w-4/5 mx-auto mb-14">
        <div className="mb-5 relative h-96 w-64 hover:cursor-pointer transition duration-200 ease-linear hover:shadow-lg shadow-black hover:scale-105">
          <img
            src={cocktail}
            alt="A cocktail"
            className="object-cover h-96 w-64 object-center"
          />
          <p className="absolute z-10 bottom-4 left-5 text-xl">
            Cocktails Menu
          </p>
        </div>
        <div className="mb-5 relative h-96 w-64 hover:cursor-pointer transition duration-200 ease-linear hover:shadow-lg shadow-black hover:scale-105">
          <img
            src={brunch}
            alt="A Meal"
            className="object-cover h-96 w-64 object-center"
          />
          <p className="absolute z-10 bottom-4 left-5 text-xl">Brunch Menu</p>
        </div>
        <div className="mb-5 relative h-96 w-64 hover:cursor-pointer transition duration-200 ease-linear hover:shadow-lg shadow-black hover:scale-105">
          <img
            src={dinner}
            alt="A Meal"
            className="object-cover h-96 w-64 object-center"
          />
          <p className="absolute z-10 bottom-4 left-5 text-xl">Dinner Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

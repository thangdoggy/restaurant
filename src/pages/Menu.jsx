import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainDishes = [
  {
    food_name: "Antipasto Platter",
    price: "28",
    description:
      "Pepperoncini | Chickpeas | Mushrooms | Italian vinaigrette dressing",
    img: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
  },
  {
    food_name: "Antipasto Platter",
    price: "28",
    description:
      "Pepperoncini | Chickpeas | Mushrooms | Italian vinaigrette dressing",
    img: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
  },
  {
    food_name: "Antipasto Platter",
    price: "28",
    description:
      "Pepperoncini | Chickpeas | Mushrooms | Italian vinaigrette dressing",
    img: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
  },
];

const Starters = [
  {
    food_name: "Antipasto Platter",
    price: "28",
    description:
      "Pepperoncini | Chickpeas | Mushrooms | Italian vinaigrette dressing",
    img: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
  },
];

const Desserts = [];

const Drinks = [];

const Menu = () => {
  const [main, setMain] = useState(true);
  const [starter, setStarter] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [drink, setDrink] = useState(false);

  let chosenMenu = [];
  if (main) chosenMenu = MainDishes;
  else if (starter) chosenMenu = Starters;
  else if (dessert) chosenMenu = Desserts;
  else chosenMenu = Drinks;

  return (
    <div className="menu">
      <div class="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-menu-page">
        <span class="text-black text-6xl px-5 md:text-8xl font-titleFont font-extrabold capitalize">
          Discover Our Menu
        </span>
      </div>

      <div className="my-20 px-5 flex flex-col lg:flex-row gap-3 items-center justify-center">
        <button
          className={`text-xl text-white uppercase tracking-wider px-5 py-2 ${
            main ? "border-2 scale-110" : "hover:scale-110"
          }`}
          onClick={() => {
            setMain(true);
            setDessert(false);
            setStarter(false);
            setDrink(false);
          }}
        >
          Main Dishes
        </button>

        <button
          className={`text-xl text-white uppercase tracking-wider px-5 py-2 ${
            starter ? "border-2 scale-110" : "hover:scale-110"
          }`}
          onClick={() => {
            setMain(false);
            setDessert(false);
            setStarter(true);
            setDrink(false);
          }}
        >
          Starters
        </button>

        <button
          className={`text-xl text-white uppercase tracking-wider px-5 py-2 ${
            dessert ? "border-2 scale-110" : "hover:scale-110"
          }`}
          onClick={() => {
            setMain(false);
            setDessert(true);
            setStarter(false);
            setDrink(false);
          }}
        >
          Desserts
        </button>

        <button
          className={`text-xl text-white uppercase tracking-wider px-5 py-2 ${
            drink ? "border-2 scale-110" : "hover:scale-110"
          }`}
          onClick={() => {
            setMain(false);
            setDessert(false);
            setStarter(false);
            setDrink(true);
          }}
        >
          Drinks
        </button>
      </div>

      <div class="mb-10 mx-auto px-5 lg:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
          {chosenMenu.length !== 0 ? (
            chosenMenu.map((item) => {
              return (
                <div className="md:flex items-center justify-between text-white py-4">
                  <div>
                    <span className="text-my-yellow font-titleFont text-3xl font-bold">
                      {item.food_name}
                    </span>
                    <span className="float-right pr-10 font-titleFont text-3xl font-bold">
                      $ {item.price}
                    </span>
                    <p className="py-5">{item.description}</p>
                  </div>
                  <img
                    src={item.img}
                    alt={item.food_name}
                    className="w-44 h-44 rounded-full"
                  />
                </div>
              );
            })
          ) : (
            <p className="text-white text-center">
              Sorry! It will be available soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getDesserts,
  getDrinks,
  getMainDishes,
  getStarters,
} from "../actions/userActions";

const Drinks = [];

const Desserts = [];

const Menu = () => {
  const [MainDishes, setMainDishes] = useState([]);
  const [Starters, setStarters] = useState([]);
  const [Desserts, setDesserts] = useState([]);
  const [Drinks, setDrinks] = useState([]);

  useEffect(() => {
    getMainDishes().then((res) => {
      setMainDishes(res.data);
    });

    getStarters().then((res) => {
      setStarters(res.data);
    });

    getDesserts().then((res) => {
      setDesserts(res.data);
    });

    getDrinks().then((res) => {
      setDrinks(res.data);
    });
  });

  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let cart = JSON.parse(localStorage.getItem("cart"));

  // Handle reserve courses
  const temp = cart.map((item) => item.id);
  const [reserved, setReserved] = useState(temp);

  const handleReserve = (item) => {
    if (!userInfo) navigate("/login");
    else {
      setReserved([...reserved, item.id]);
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  // console.log(cart);
  // console.log(reserved);

  const handleCancel = (item) => {
    cart = cart.filter((e) => e.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setReserved(cart.map((item) => item.id));
  };

  // Menu type choice
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

                    {reserved.length > 0 &&
                    reserved.some((e) => e === item.id) ? (
                      <>
                        <button
                          onClick={() => handleCancel(item)}
                          className="border px-4 py-1 text-sm float-right mr-8 border-green-600 text-green-600 hover:bg-my-yellow hover:duration-200 hover:-translate-y-1 hover:translate-x-1 hover:text-black hover:border-my-yellow"
                        >
                          Reserved
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleReserve(item)}
                        className="border px-4 py-1 text-sm float-right mr-8 hover:bg-my-yellow hover:duration-200 hover:-translate-y-1 hover:translate-x-1 hover:text-black hover:border-my-yellow"
                      >
                        Reserve
                      </button>
                    )}
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

        <Link
          to="/reservation"
          className="float-right pb-10 text-my-yellow cursor-pointer hover:underline"
        >
          Go to your reservation
        </Link>
      </div>
    </div>
  );
};

export default Menu;

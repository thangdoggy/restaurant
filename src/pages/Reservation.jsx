import React from "react";

const Reservation = () => {
  return (
    <div className="reservation">
      <div class="flex flex-col items-center gap-5 justify-center h-screen bg-fixed bg-center bg-cover bg-reservation-page">
        <h2 class="text-white text-6xl px-5 md:text-8xl font-titleFont font-extrabold capitalize">
          Table Reservations
        </h2>
      </div>

      <div class="bg-theme-dark px-10 flex flex-col items-center">
        <span class="pt-20 pb-10 font-titleFont text-my-yellow capitalize font-semibold text-4xl tracking-wider">
          book a table
        </span>

        <form action="" className="w-full md:px-36">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 text-white">
            <select
              name="person"
              id="person"
              className=" bg-neutral-800 bg-opacity-60 py-4 px-8 border border-gray-500 focus:outline-none"
            >
              <option value="persons">Persons</option>
              <option value="1 person">1 person</option>
              <option value="2 person">2 person</option>
              <option value="4 person">4 person</option>
              <option value="8 person">8 person</option>
              <option value="10 person">10 person</option>
            </select>

            <input
              type="date"
              className="bg-neutral-800 bg-opacity-60 py-4 px-8 border border-gray-500 focus:outline-none"
            />

            <input
              type="time"
              className="bg-neutral-800 bg-opacity-60 py-4 px-8 border border-gray-500 focus:outline-none"
            />

            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Tell us more information ..."
              className="col-span-full bg-neutral-800 bg-opacity-60 my-2 py-4 px-8 border border-gray-500 focus:outline-none"
            ></textarea>

            <button className="col-span-full w-full py-3 border border-my-yellow text-white font-serif hover:bg-my-yellow hover:duration-200 hover:-translate-y-1 hover:translate-x-1 hover:text-black">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;

import React from "react";
import login from "../img/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      <div className="hidden md:block">
        <img
          className="h-screen w-full "
          src={login}
          alt="login-avant-garden"
        />
      </div>

      <div className="bg-black flex flex-col justify-center bg-bg-footer">
        <form className="max-w-[400px] w-full mx-auto bg-zinc-900 bg-opacity-50 p-8 px-8">
          <div className="flex justify-between">
            <h2 className="text-5xl font-bold text-center text-my-yellow font-titleFont py-5">
              Log In
            </h2>
            <Link
              to="/"
              className="flex items-center z-50 hover:scale-110 duration-500"
            >
              <img
                src="https://popmenucloud.com/cdn-cgi/image/width=300,height=300,format=auto,fit=scale-down/xgipqnlt/12278568-4a53-4797-935a-0784cb40a1a5.png"
                alt="avant-garden-logo"
                className="w-32"
              />
            </Link>
          </div>

          <div className="flex flex-col text-gray-400 py-2 text-sm">
            <label>Email</label>
            <input
              className="bg-neutral-800 bg-opacity-60 my-2 p-2 px-3 focus:outline-none"
              type="text"
              name=""
              id=""
            />
            <label>Password</label>
            <input
              className="bg-neutral-800 bg-opacity-60 my-2 p-2 px-3 focus:outline-none"
              type="password"
              name=""
              id=""
            />
          </div>

          <div className="flex justify-between text-gray-400 py-2 text-sm">
            <p className="flex items-end">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <Link className="">Forgot Password ?</Link>
          </div>
          <button className="w-full my-5 py-2 border border-my-yellow text-white font-serif hover:bg-my-yellow hover:duration-200 hover:-translate-y-1 hover:translate-x-1 hover:text-black">
            Let's explore Avant Garden!
          </button>
          <p className="text-gray-400 text-xs text-center">
            Don't you have an account?{" "}
            <Link to="/register" className="text-my-yellow hover:underline">
              {" "}
              Register{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

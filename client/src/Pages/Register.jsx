import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-44">
        <h1 className="text-4xl mb-4 text-center font-bold tracking-widest">
          Register
        </h1>
        <form action="" className="max-w-md mx-auto">
          <input type="text" placeholder="Kreem AKM " />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary my-4">Register</button>
        </form>
      </div>
      <div className="mt-2">
        <span className="text-gray-600">
          Already a member ?{" "}
          <Link
            to={"/register"}
            className="font-bold text-primary hover:text-blue-400"
          >
            Login now (-0_0-)
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;

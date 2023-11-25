import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-44">
        <h1 className="text-4xl mb-4 text-center font-bold tracking-widest">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary my-4">Login</button>
        </form>
      </div>
      <div className="mt-2">
        <span className="text-gray-600">
          Don't have an account yet ! <Link to={'/register'} className="font-bold text-primary hover:text-blue-400">Register now (^_^)</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import welcome from "../../assets/img/welcome.svg";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";
const index = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email !== "" || user.password !== "") {
      navigate("/countries");
    } else {
      setError("Please fill all the fields");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <div className="container h-screen m-auto flex justify-center items-center gap-10">
      <div className="lg:w-2/5 hidden lg:block">
        <img src={welcome} alt="welcome-img" />
      </div>
      <div className="h-full md:xl:lg:w-6/12 flex justify-center items-center">
        <div className="m-auto py-10 px-10 sm:p-20 xl:w-10/12 bg-white shadow">
          <div className="space-y-4 text-center">
            <p className="font-medium text-lg text-gray-600">Log in Rest Countries!</p>
          </div>

          {error && <Message type="error"> {error} </Message>}
          <div role="hidden" className="mt-12 border-t" />

          <form onSubmit={onSubmit} className="space-y-6 py-6">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div className="flex flex-col items-end">
              <input
                type="password"
                placeholder="Your Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-indigo-600 transition hover:bg-indigo-700 mb-5"
              >
                <span className="font-semibold text-white text-lg">Login</span>
              </button>
              <span className="text-sm tracking-wide text-blue-600 hover:text-blue-700 cursor-pointer">
                Don't have an account with us?
              </span>
            </div>
            <div role="hidden" className="mt-12 border-t" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleBack = () => {
    navigate("/countries");
  };
  return (
    <div className="bg-gray-100 h-screen">
      <div
        className="container m-auto pt-8 mb-10 cursor-pointer px-4"
        onClick={() => handleBack()}
      >
        <IoIosArrowBack size={30} />
      </div>
      <div className="container flex flex-col lg:flex-row m-auto gap-10 justify-center items-center px-4">
        <div>
          <img
            src={state.country.flags.svg}
            alt={state.country.name.common}
            className="w-full max-w-lg h-full object-contain rounded-lg"
          />
        </div>
        <div className="">
          <h1 className="font-bold mb-4 text-xl">
            {state.country.name.common}
          </h1>
          <div className="grid grid-cols-2 gap-10">
            <p className="font-bold text-gray-700 uppercase">
              Native Name: {""}
              <span className="normal-case font-normal">
                {state.country.name.official}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase">
              Continent: {""}
              <span className="normal-case font-normal">
                {state.country.continents}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase">
              Region: {""}
              <span className="normal-case font-normal">
                {state.country.region}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase">
              Capital: {""}
              <span className="normal-case font-normal">
                {state.country.capital}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase">
              Area: {""}
              <span className="normal-case font-normal">
                {state.country.area}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase">
              Population: {""}
              <span className="normal-case font-normal">
                {state.country.population}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

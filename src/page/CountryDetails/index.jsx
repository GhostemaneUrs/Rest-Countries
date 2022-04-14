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
    <>
      <div className="container m-auto pt-8 mb-10 px-4">
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => handleBack()}
        >
          <IoIosArrowBack size={30} />
          <h1 className="font-bold mb-0 left-5 text-3xl">
            {state.country.name.common}
          </h1>
        </div>
      </div>
      <div className="container flex flex-col m-auto gap-10 justify-center items-center px-4">
        <div className="h-[260] md:h-[540px] w-full max-w-[900px]">
          <img
            src={state.country.flags.svg}
            alt={state.country.name.common}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-5">
            <p className="font-bold text-gray-700 uppercase text-xl ">
              Native Name: {""}
              <span className="normal-case font-normal">
                {state.country.name.official}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase text-xl">
              Continent: {""}
              <span className="normal-case font-normal">
                {state.country.continents}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase text-xl">
              Region: {""}
              <span className="normal-case font-normal">
                {state.country.region}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase text-xl">
              Capital: {""}
              <span className="normal-case font-normal">
                {state.country.capital}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase text-xl">
              Area: {""}
              <span className="normal-case font-normal">
                {state.country.area}
              </span>
            </p>
            <p className="font-bold text-gray-700 uppercase text-xl mb-6">
              Population: {""}
              <span className="normal-case font-normal">
                {state.country.population}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

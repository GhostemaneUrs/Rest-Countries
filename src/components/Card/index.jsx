import React from "react";

export const index = ({ country }) => {
  return (
    <div className="card container rounded-lg shadow-2xl bg-white">
      <div className="sm:h-full md:h-56 lg:h-56 xl:h-56 relative">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
        />
        <div className="gradiant z-10"/>
        <div className="animated-hover absolute left-0  z-20 w-full">
          <div className="px-8 py-3 border-color text-white w-fit">
            <h1 className="font-bold text-xl text-overflow">
              {country.name.common}
            </h1>
          </div>
          <div className="bg-white flex flex-col justify-between py-3 px-4">
            <p className="font-bold mb-1 text-gray-700 uppercase">
              Population: {""}
              <span className="normal-case font-normal">{country.population}</span>
            </p>
            <p className="font-bold mb-1 text-gray-700 uppercase">
              Region: {""}
              <span className="normal-case font-normal">{country.region}</span>
            </p>
            <p className="font-bold mb-1 text-gray-700 uppercase text-overflow">
              Capital: {""}
              <span className="normal-case font-normal">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

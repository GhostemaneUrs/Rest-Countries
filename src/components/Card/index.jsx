import React from "react";

export const index = ({ country }) => {
  return (
    <div className="container rounded-lg shadow-lg bg-white">
      <div className="sm:h-full md:h-56 lg:h-56 xl:h-56">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-full object-contain rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="flex flex-col justify-between mb-3 mx-5 px-3 py-3">
        <h1 className="font-bold mb-4 text-xl">{country.name.common}</h1>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Population: {""}
          <span className="normal-case font-normal">{country.population}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Region: {""}
          <span className="normal-case font-normal">{country.region}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Capital: {""}
          <span className="normal-case font-normal">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default index;

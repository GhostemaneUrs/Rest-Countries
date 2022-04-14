import React, { useState, useEffect } from "react";
import { getCountries, getCountry, getRegion } from "../../utils/countries";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import MoonLoader from "react-spinners/ClipLoader";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries(setCountries, setLoading);
  }, []);

  const searchCountry = (e) => {
    if (e.target.value.length < 3 || e.target.value === "") {
      getCountries(setCountries, setLoading);
    } else {
      getCountry(e.target.value, setCountries, setLoading);
    }
  };

  const filterRegion = (e) => {
    if (e.target.value === "") {
      getCountries(setCountries, setLoading);
    } else {
      getRegion(e.target.value, setCountries, setLoading);
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="w-full shadow-sm py-6 px-3 bg-white mb-10">
          <div className="container m-auto">
            <h1 className="font-bold text-xl">Where in the world?</h1>
          </div>
        </div>
        <div className="flex items-center container m-auto p-4 mb-16 sm:p-0">
          <div className="my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-sm text-gray-400">
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => searchCountry(e)}
            className="pl-10 p-3 shadow rounded-sm w-1/3 outline-none"
          />
          <select
            id="select-country"
            name="select-country"
            onChange={(e) => filterRegion(e)}
            className=" ml-auto my-2 p-3  shadow rounded-sm font-medium outline-none"
          >
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        {loading ? (
          <div className="flex items-center justify-center">
            <MoonLoader size={300} color={"#4f46e5"} loading={loading} />
          </div>
        ) : (
          <div className="scroll">
            <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-auto p-4 sm:p-0">
              {countries.map((country, index) => (
                <Link to={{ pathname: "details", state: country }} key={index}>
                  <Card country={country} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default index;

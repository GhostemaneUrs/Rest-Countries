import React, { useState, useEffect } from "react";
import { getCountries, getCountry, getRegion } from "../../utils/countries";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import MoonLoader from "react-spinners/ClipLoader";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 20,
    currentPage: 1,
    totalPage: Math.ceil(countries.length / 20),
  });

  useEffect(() => {
    getCountries(setCountries, setLoading);
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      setPagination({
        ...pagination,
        totalPage: Math.ceil(countries.length / pagination.limit),
      });
    }
  }, [countries]);

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
      <div className="w-full shadow-sm py-6 px-3 bg-white mb-5">
        <div className="container m-auto">
          <h1 className="font-bold text-2xl">Where in the world?</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center container m-auto p-4 mb-5 sm:p-0 gap-5">
        <input
          type="text"
          placeholder="Search for a country"
          onChange={(e) => searchCountry(e)}
          className="pl-10 p-3 shadow rounded-sm w-full md:w-2/5 outline-none"
        />
        <select
          id="select-country"
          name="select-country"
          onChange={(e) => filterRegion(e)}
          className="p-3 shadow rounded-sm w-full md:w-2/5 outline-none font-medium "
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
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-auto p-4 sm:p-0 mb-5">
          {countries
            .slice(
              (pagination.currentPage - 1) * pagination.limit,
              pagination.currentPage * pagination.limit
            )
            .map((country, index) => (
              <Link to={"/details"} state={{ country: country }} key={index}>
                <Card country={country} />
              </Link>
            ))}
        </div>
      )}
      <div className="container m-auto flex justify-center mb-3">
        <Pagination pagination={pagination} setPagination={setPagination} />
      </div>
    </>
  );
};

export default index;

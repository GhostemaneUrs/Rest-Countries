import axios from "axios";
import Swal from "sweetalert2";

export const getCountries = async (setCountries, setLoading) => {
  setLoading(true);
  await axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      setLoading(false);
      setCountries(response.data);
    })
    .catch((error) => {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
};

export const getCountry = async (name, setCountries, setLoading) => {
  setLoading(true);
  await axios
    .get(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => {
      setLoading(false);
      setCountries(response.data);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        Swal.fire({
          timer: 3000,
          icon: "error",
          title: "Oops...",
          showConfirmButton: false,
          text: "The country you are looking for is not found!",
        });
      }
    });
};

export const getRegion = async (region, setCountries, setLoading) => {
  setLoading(true);
  await axios
    .get(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => {
      setLoading(false);
      setCountries(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

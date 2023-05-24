import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "../index.css";

// function to manage states of app

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "", // optional
  });

  const APIKEY = process.env.REACT_APP_API_KEY;

  // function for fetching data from openweather api
  
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch(err=>{
          console.log(err); // To find the error 
        }); 
      setWeather({ data: data });
    }
  }

  // function to handle change in form values
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div class="bg-white mt-8 ml-0 mr-0 mb-8 border-2 divide-dashed border-gray max-w-max pt-0 pl-5 pr-5 pb-5">
      <span class="text-6xl font-serif">Weather App</span>
      <br />
      <form class="mt-7">
        <input
          type="text"
          placeholder="City"
          name="city"
          class="p-2.5 border-0 border-dashed border-b-2 border-blue-400 mr-2.5 outline-none"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country (Optional)"
          name="country"
          class="p-2.5 border-0 border-dashed border-b-2 border-blue-400 mr-2.5 outline-none"
          onChange={(e) => handleChange(e)}
        />
        <button class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} /> {/* displaying weather data if api call is succuessful */}
        </div>
      ) : null}
    </div>
  );
}

export default Weather;






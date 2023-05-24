import React from "react";
import "../index.css"


function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div class="mt-5 flex flex-col flex-nowrap">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div class="w-96 mt-5 mb-5 justify-self-center p-12 rounded-3xl relative bg-white border-2 border-black border-solid">
            <span class="absolute top-2 left-2 text-2xl">
              {data.name} , {data.sys.country}. Weather
            </span>
            <span class="absolute left-2 text-gray-400 -mt-2">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1 class="text-7xl -m-2 -ml-37">
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            {/* <span class="absolute top-64 left-32 font-medium text-lg">{data.weather[0].main}</span> */}
            <img class="w-24 absolute top-10" src={iconurl} alt="" srcSet="" />
            <span class="absolute left-2 text-2xl">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          <div class="ml-10 mr-10 grid grid-cols-2 auto-rows-auto gap-4">
            <div class=" justify-self-end w-60">
              <table>
              <tbody>
              <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">High/Low</h4>
                  </td>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Humidity</h4>
                  </td>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Pressure</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Visibility</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>

            <div class=" justify-self-end w-60">
              <table>
                <tbody>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Wind</h4>
                  </td>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Wind Direction</h4>
                  </td>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Sunrise</h4>
                  </td>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <h4 class="text-left mr-6 text-xl">Sunset</h4>
                  </td>
                  <td class="border-b-2 border-dashed border-gray-500">
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  Sun,
  Umbrella,
  Wind,
} from "react-feather";

function Hero() {
  const [location, setLocation] = useState("Medan");
  const [local, setlocal] = useState([]);
  const [forecasts, setForecast] = useState([]);
  const [currentTemp, setCurrentTemp] = useState([]);
  const getWeathers = async () => {
    try {
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=ffa548d140304616b6b141428200412&q=${location}&days=3`
      );
      setForecast(response.data.forecast.forecastday);
      setCurrentTemp(response.data.current);
      setlocal(response.data.location);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getWeathers();
    return () => {};
  }, [location]);

  return (
    <>
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="mt-5">
          <p className="text-5xl font-bold text-lightBlue-900">
            Different kinds of <br /> weather inside <br /> of 24 hours
          </p>
          <p className="leading-relaxed text-gray-400 text-md mt-3">
            Various versions have evolved over the years, <br /> sometimes by
            accident, somtimes on purposes <br /> (injected humor and the like)
          </p>
          <div className="inline-flex items-center justify-center">
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-white p-5 mt-5 w-96 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Search your town"
            />
          </div>
          <p className="text-gray-400 mt-5 font-medium">
            Best way to know your city weather easily
          </p>
        </div>
        <div className="mt-5">
          <img
            src="/illustration.svg"
            alt="Weather Application Illustration"
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto mt-24 ">
        <div className="bg-white shadow-2xl p-5 w-1/2 rounded">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Cloud className="text-lightBlue-400 " />
              <span className="text-md font-bold ml-3">Weather Report</span>
            </div>
            <span className="text-gray-400 text-sm">
              {local.name},{local.region}
            </span>
          </div>
          <div className="p-5 flex justify-between">
            <h1 className="text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                {currentTemp.temp_c}°C
              </span>
            </h1>
            <div className="flex  font-medium">
              {forecasts.map((forecast, index) => {
                return (
                  <div
                    className="flex items-center justify-center flex-col"
                    key={index}
                  >
                    <span className="mr-2 ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                      {new Intl.DateTimeFormat("id-ID", {
                        weekday: "short",
                      }).format(new Date(forecast.date))}
                    </span>
                    <img
                      src={`http://${forecast.day.condition.icon}`}
                      alt={forecast.day.condition.text}
                      width="50"
                      height="50"
                    />
                    <p className="text-sm font-bold text-gray-400">
                      {forecast.day.avgtemp_c}°
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

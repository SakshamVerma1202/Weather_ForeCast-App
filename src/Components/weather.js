import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

const Weather = () => {
  const [weatherList, setWeatherList] = useState([]);
  const [cityName, setCityName] = useState("");

  const searchOption = (value) => {
    console.log(value);
  };

  const getWeatherList = async (cityName) => {

    //The Following API is not working

    // let data = await fetch(
    //   `https://api.coindesk.com/v1/bpi/currentprice.json`
    // );
    // let finalData = await data.json();
    
    if (cityName == "London") {
      //Since all data provided by the api above were lost I fetched & saved data retrieved for "London"
      let finalData = {
        request: {
          type: "City",
          query: "London, United Kingdom",
          language: "en",
          unit: "m",
        },
        location: {
          name: "London",
          country: "United Kingdom",
          region: "City of London, Greater London",
          lat: "51.517",
          lon: "-0.106",
          timezone_id: "Europe/London",
          localtime: "2022-08-05 05:37",
          localtime_epoch: 1659677820,
          utc_offset: "1.0",
        },
        current: {
          observation_time: "04:37 AM",
          temperature: 15,
          weather_code: 113,
          weather_icons: [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
          ],
          weather_descriptions: ["Sunny"],
          wind_speed: 9,
          wind_degree: 340,
          wind_dir: "NNW",
          pressure: 1020,
          precip: 0,
          humidity: 55,
          cloudcover: 0,
          feelslike: 14,
          uv_index: 1,
          visibility: 10,
          is_day: "yes",
        },
      };
      setWeatherList(finalData);
      console.log(weatherList);
    }
  };

  useEffect(() => {
    getWeatherList(cityName);
  }, [cityName]);
  return (
    <>
      <div class="card">
        <div class="search">
          <input
            type="text"
            class="search-bar"
            placeholder="Search"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          />
          <button onClick={searchOption(cityName)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </button>
        </div>
        <div>
          {weatherList == 0 ? (
            <>
              <h2 class="city">Weather in Your Location</h2>
              <div class="H">[Country_Mean_time], [Local_Time]</div>
              <div class="H">[Mean_Location], [Country]</div>
              <div class="H">
                <h3>Time-Zone</h3>
              </div>
              <div class="flex">
                <img
                  src="https://openweathermap.org/img/wn/04n.png"
                  alt=""
                  class="icon"
                />{" "}
                -Temp°C
                <div class="description">[Atmostphere]</div>
              </div>
              <div class="humidity">[Humidity]: %age</div>
              <div class="wind">Wind Direction & Wind speed</div>
            </>
          ) : (
            <>
              <h2 class="city">Weather in {weatherList.location.name}</h2>
              <div class="H">
                {weatherList.current.observation_time}, Local Time:
                {weatherList.location.localtime}
              </div>
              <div class="H">
                {weatherList.location.region}, {weatherList.location.country}
              </div>
              <div class="H">
                <h3>Time-Zone: {weatherList.location.timezone_id}</h3>
              </div>
              <h1 class="temp">
                <img
                  src={weatherList.current.weather_icons}
                  height="35px"
                  alt=""
                  class="icon"
                />{" "}
                - {weatherList.current.weather_descriptions}{" "}
                {weatherList.current.temperature}°C
              </h1>
              <div class="humidity">
                Humidity: {weatherList.current.humidity}%
              </div>
              <div class="wind">
                Wind Direction: {weatherList.current.wind_dir}, Wind Speed:{" "}
                {weatherList.current.wind_speed} kmph
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;

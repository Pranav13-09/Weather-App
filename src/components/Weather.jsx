import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure} from '../features/weatherSlice';
import { fetchLocation, fetchWeather } from '../api';
import { getIcons } from '../middleware/getIcons';
import Loader from "./Loader/Loader"
import Card from "./Card"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherPage = () => {
  const { loading, error, weatherData } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  useEffect(() => {
    if(error){
      toast.error("Location is Invalid. Please Enter Correct Location.");
      dispatch(fetchWeatherFailure(null));
    }
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        dispatch(fetchWeatherStart());

        const weather = await fetchWeather(latitude, longitude);
        dispatch(fetchWeatherSuccess(weather));
      } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
      }
    };

    const fetchCurrentLocationWeather = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              fetchWeatherData(latitude, longitude);
            },
            (error) => {
              console.error('Error getting current location:', error);
              dispatch(fetchWeatherFailure('Error getting current location'));
             
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser');
          dispatch(fetchWeatherFailure('Geolocation is not supported'));
          
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        dispatch(fetchWeatherFailure('Error fetching weather data'));
        
      }
    };

    fetchCurrentLocationWeather();
  }, [dispatch,error]);

  const handleSearch = async (e) => {
    console.log('I AM HERE');
    e.preventDefault();
    if (city.trim() === '') {
      return;
    }

    try {
      dispatch(fetchWeatherStart());

      const location = await fetchLocation(city);
      const { lat, lng } = location.geometry;

      const weather = await fetchWeather(lat, lng);
      dispatch(fetchWeatherSuccess(weather));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };





  if (loading) {
    return(
    <div className="flex  justify-center h-full">
       <Loader/>
    </div>
    )
  }





  if (!weatherData) {
    return (
      <div className="flex items-center h-80">
       <Loader/>
      </div>
      
    );
  }

  const {  main, weather } = weatherData;
  let WeatherIcon = getIcons(weather[0].main);

  console.log(weather[0].main,"i am main")


  console.log(WeatherIcon,"i am weatherIcon");

  return (
    
        <section class="relative bg-gray-900  min-h-screen">
          
       
             
          <div class="relative container pt-8 px-4 mb-10 md:mb-16 mx-auto text-center">
    
            <h2 class="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
              Meteorology App
            </h2>
           
            <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
              Find out the current weather situation around the world
            </p>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Search City"
              class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
            ></input>
            <button
              onClick={ handleSearch}
              type="button"
              className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
        {loading ? (
          <Loader/>
        ) : error ? (
                  <ToastContainer
              position="top-right"
              autoClose={4000}
              theme="light"
            />
        ) : (
        <>
        <Card weather={weather} main={main} weatherData={weatherData} WeatherIcon={WeatherIcon}/>
                <ToastContainer
              position="top-right"
              autoClose={4000}
              theme="light"
            />
        
        </>
          
        )}
         
      </section>
  );
};

export default WeatherPage;

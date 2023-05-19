import React from 'react'

const Card = ({name,weatherData,WeatherIcon,weather,main}) => {
  return (
     <div class="max-w-6xl px-4 mx-auto ">
            <div class="flex flex-wrap -mx-4 justify-center">
              <div class="w-full  md:w-3/5 lg:w-2/5 px-4">
                <div class="p-4 border border-blue-800 rounded-lg">
    
                  <h1 className="text-white text-4xl  text-center">{weatherData.name}</h1>
                  
                  <h3 className="text-slate-100 text-normal text-center mt-4">{weather[0].main} </h3>

                  <div className="mt-4 flex justify-center items-center">
                    <span class="flex items-center justify-center w-20 h-20 rounded-full border-2">
                      {WeatherIcon}
                    </span>
                  </div>

                  <div className='flex flex-row gap-4 mt-4 justify-center text-xs sm:text-base'>
                      <div className='flex flex-col items-center'>
                        <h2 className="text-white">Temperature</h2>
                        <h5 className="text-center text-slate-500"> {(main.temp-273.15).toFixed(2)} °C</h5>
                      </div>
                      <div className='flex flex-col items-center'>
                        <h2 className="text-white">Wind</h2>
                        <h5 className="text-center text-slate-500"> {(weatherData.wind.speed).toFixed(2)} k/h</h5>
                      </div>
                      <div className='flex flex-col items-center'>
                        <h2 className="text-white">Humidity</h2>
                        <h5 className="text-center text-slate-500"> {(main.humidity).toFixed(1)} %</h5>
                      </div>
                      <div className='flex flex-col items-center'>
                        <h2 className="text-white">Visibility</h2>
                        <h5 className="text-center text-slate-500"> {(weatherData.visibility).toFixed(2)} km</h5>
                      </div>
                </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Card
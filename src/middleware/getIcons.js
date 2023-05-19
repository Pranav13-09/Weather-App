import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiDayHaze,
} from "react-icons/wi";
import { iconColor } from "../constants/color";
export const getIcons = (weather) => {
  let WeatherIcon;
  switch (weather) {
    case "Clear":
      WeatherIcon = <WiDaySunny size={56} color={iconColor} />;
      break;
    case "Clouds":
      WeatherIcon = <WiCloudy size={56} color={iconColor} />;
      break;
    case "Rain":
      WeatherIcon = <WiRain size={56} color={iconColor} />;
      break;
    case "Snow":
      WeatherIcon = <WiSnow size={56} color={iconColor} />;
      break;
    case "Thunderstorm":
      WeatherIcon = <WiThunderstorm size={56} color={iconColor} />;
      break;
    case "Fog":
      WeatherIcon = <WiFog size={56} color={iconColor} />;
      break;
    case "Haze":
      WeatherIcon = <WiDayHaze size={56} color={iconColor} />;
      break;
    default:
      WeatherIcon = null;
      break;
  }

  return WeatherIcon;
};

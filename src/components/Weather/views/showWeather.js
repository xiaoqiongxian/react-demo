import React from 'react';
import {connect} from 'react-redux';
import * as Status from '../status.js';

export const stateKey = 'weather';

const ShowWeather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
  switch (status) {
    case Status.LOADING: {
      return <div>天气信息请求中...</div>;
    }
    case Status.SUCCESS: {
      return (
        <div>
          {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
        </div>
      )
    }
    case Status.FAILURE: {
      return <div>天气信息装载失败</div> 
    }
    default: {
      throw new Error('unexpected status ' + status);
    }
  }
}

const mapStateTopProps = (state) => {
  //因为路由切换的时候会获取下一个页面的state，所以必须写默认值，不然从当前页面切换到另一个页面时会报错。
  const weatherData = state[stateKey] || {
      status: "loading",
      cityName: "",
      weather: "",
      lowestTemp: "",
      highestTemp: ""
  };
  return {
    status: weatherData.status,
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  };
}

export default connect(mapStateTopProps)(ShowWeather);

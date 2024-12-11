import React from "react";
import { WeatherProvider } from "../contexts/WeatherContext";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";

const WeatherApp = () => {
  return (
    <WeatherProvider>
      <Header />
      <SearchBar />
      <WeatherDisplay />
    </WeatherProvider>
  );
};

export default WeatherApp;

import React from "react";
import restaurantData from "../../../../restaurantData.json";

const About = () => {
  return (
    <div className="flex flex-row-reverse w-[100%] h-[100vh] pt-8  justify-between px-40">
      <div className="flex flex-col gap-4 py-16">
        <h1 className="text-3xl font-semibold max-w-md">
          Welcome to Our Restaurant
        </h1>
        <p className="max-w-sm font-light font-[0.9rem]">
          {restaurantData.restaurant.location.address}
          <br></br>
          <b>longitude</b>:{" "}
          <i>{restaurantData.restaurant.location.longitude}</i>
          <br></br>
          <b>latitude</b>: <i>{restaurantData.restaurant.location.latitude}</i>
        </p>
        <div className="flex gap-4">
          <button className="w-fit px-4 py-2 bg-gray-900 text-white">
            Menu
          </button>
          <button className="w-fit px-4 py-2 bg-orange-400 text-white">
            Book a Table
          </button>
        </div>
      </div>
      <div className="w-[432px] h-[485px]">
        <img
          className="w-[100%] h-[100%] rounded-3xl "
          src={"https://picsum.photos/650/930"}
          alt="img"
        ></img>
      </div>
    </div>
  );
};

export default About;

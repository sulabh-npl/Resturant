import React from "react";
import Card from "./Card";
import restaurantData from "../../../../restaurantData.json";

const DishesList = ({ dishes }) => {
  return (
    <>
      <div className="pt-16  mx-auto pb-8 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-center font-semibold max-w-md">
            Our Special Menu
          </h1>
          <p className="max-w-md text-justify font-light font-[0.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-2  gap-8 justify-center items-center">
          {restaurantData.restaurant.menu.categories.map((i) => (
            <Card item={i} />
          ))}
        </div>
      </div>
      {/* way to read other options in menu dict which are not in categories and array */}
      <div className="pt-16  mx-auto pb-8 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-center font-semibold max-w-md">
            Our Other Menu
          </h1>
          <p className="max-w-md text-justify font-light font-[0.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Card item={restaurantData.restaurant.menu.seasonal_menu} />
      </div>
    </>
  );
};

export default DishesList;

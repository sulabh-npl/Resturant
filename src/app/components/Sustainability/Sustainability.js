//Sustainabiliyu component
import React from "react";
import restaurantData from "../../../../restaurantData.json";

const Sustainability = () => {
  return (
    <>
      <div className="pt-16  mx-auto pb-8 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-center font-semibold max-w-md">
            Our Sustainability Initiatives
          </h1>
          <p className="max-w-md text-justify font-light font-[0.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-2  gap-8 justify-center items-center">
          {restaurantData.restaurant.sustainability.initiatives.map((i) => (
            <div className="flex justify-center py-2  items-center gap-2  flex-col">
              <span className="   px-[30%] py-2 bg-gray-900 text-white rounded-md">
                {i.name}
              </span>
              <h1 className="font-semibold">{i.name}</h1>
              <p className=" max-w-[250px] font-light">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sustainability;

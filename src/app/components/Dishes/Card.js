import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold max-w-md">
        {" "}
        {item.name}
      </h1>
      <div>
        <div className="grid grid-cols-2  gap-8 justify-center items-center">
          {item.items.map((i) => (
            <div className="flex justify-center py-2  items-center gap-2  flex-col">
              <div className="w-2/3">
                <img
                  src={"https://picsum.photos/400/450"}
                  className="w-[100%] rounded-md h-[100%]"
                  alt="img"
                ></img>
              </div>
              <span className="   px-[30%] py-2 bg-gray-900 text-white rounded-md">
                ${i.price}
              </span>
              <h1 className="font-semibold">{i.name}</h1>
              <p className=" max-w-[250px] font-light">{i.description}</p>
              <p className=" max-w-[250px] font-light">
                <b>Seasonal Availability</b>: <i>{i.seasonal_availability}</i>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

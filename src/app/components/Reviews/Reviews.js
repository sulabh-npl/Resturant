import React from "react";
import restaurantData from "../../../../restaurantData.json";

const Reviews = () => {
  return (
    <>
      <div className="pt-16  mx-auto pb-8 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-center font-semibold max-w-md">
            Our Reviews
          </h1>
          <p className="max-w-md text-justify font-light font-[0.9rem]">
            What our customers say about us.
          </p>
        </div>
        <div className="grid grid-cols-2  gap-8 justify-center items-center">
          {restaurantData.restaurant.reviews.map((i) => (
            <div className="flex justify-center py-2  items-center gap-2  flex-col">
              <span className="   px-[30%] py-2 bg-gray-900 text-white rounded-md">
                {i.rating}
              </span>
              <h1 className="font-semibold">{i.customer_name}</h1>
              <p className=" max-w-[250px] font-light">{i.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;

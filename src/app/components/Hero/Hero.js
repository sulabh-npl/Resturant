import React from "react";
import restaurantData from "../../../../restaurantData.json";

const Hero = () => {
  return (
    <div className="flex w-[100%] max-h-max  justify-between px-32">
      <div className="flex flex-col gap-4 py-16">
        <h1 className="text-3xl font-semibold max-w-md">
          We provide the best food for you
        </h1>
        <h2>Ambiance</h2>
        <p className="max-w-sm font-light font-[0.9rem]">
          {restaurantData.restaurant.ambiance.description}
        </p>
        <div className="flex gap-4">
          <button className="w-fit px-4 py-2 bg-gray-900 text-white">
            Menu
          </button>
          <button className="w-fit px-4 py-2 bg-orange-400 text-white">
            Book a Table
          </button>
        </div>
        {/* Display online presense here as icons with provided link */}

        <div>
          We are present on
          <br></br>
          <button className="w-fit px-4 py-2 bg-gray-900 text-white">
            {restaurantData.restaurant.online_presence.website}
          </button>{" "}
          <br></br>
          <br></br>
          <button className="w-fit px-4 py-2 bg-orange-400 text-white">
            {restaurantData.restaurant.online_presence.social_media.facebook}
          </button>
          <br></br>
          <br></br>
          <button className="w-fit px-4 py-2 bg-orange-400 text-white">
            {restaurantData.restaurant.online_presence.social_media.instagram}
          </button>
          <br></br>
          <br></br>
          <button className="w-fit px-4 py-2 bg-orange-400 text-white">
            {restaurantData.restaurant.online_presence.social_media.twitter}
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

export default Hero;

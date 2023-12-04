import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import DishesList from "./components/Dishes/DishesList";
import About from "./components/AboutUs/AboutUs";
import OurChief from "./components/OurChief/OurChief";
import Sustainability from "./components/Sustainability/Sustainability";
import Reviews from "./components/Reviews/Reviews";
import Awards from "./components/Awards/Awards";
import Events from "./components/Events/Events";

import restaurantData from "../../restaurantData.json";

export default function Home() {
  console.log(restaurantData.restaurant.name);
  return (
    <div>
      <Hero title={restaurantData.restaurant.name} />
      <DishesList dishes={restaurantData.restaurant.menu.categories.items} />
      <About />
      <Sustainability />
      <Awards />
      <Events />
      <Reviews />
      <OurChief />
    </div>
  );
}

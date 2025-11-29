import React from "react";
import Hero from "../../Components/Home/Hero";
import Category from "../../Components/Home/Category";
import PopularProducts from "../../Components/Home/PopularProducts";
import LatestExclusive from "../../Components/Home/LatestExclusive";
import NewProducts from "../../Components/Home/NewProducts";
import Collection from "../../Components/Home/Collection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <PopularProducts />
      <LatestExclusive />
      <NewProducts />
      <Collection />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Lorem İpsum Title" subtitle="Lorem İpsum Dolar Sit aMet">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

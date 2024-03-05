import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero w-full h-screen bg-cover object-cover relative">
      {/* overlay */}

      <div className="h-screen text-white grid bg-cover bg-hero">
        <div className="col-start-1 row-start-1 bg-black bg-opacity-70 w-full h-full"></div>
        <div className="col-start-1 row-start-1">
          <Navbar />
          <div className="grid h-[calc(100vh-80px)] grid-cols-5 justify-center items-center container">
            <div className="text-white flex flex-col gap-4 col-span-5 lg:col-span-3">
              <div className="flex flex-col gap-6">
                <h1 className="text-heading font-playfairDisplay font-bold leading-snug">
                  Discover the Treasures of Yogyakarta
                </h1>
                <p className="text-subheading">
                  Exploring the diverse and enchanting landscapes, cultures, and
                  experiences that Yogyakarta has to offer.
                </p>
              </div>
              <Link href="#start">
                <Button className="bg-primary text-white w-40 h-12 rounded-lg mt-10">
                  Explore Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
    </div>
  );
};

export default Hero;

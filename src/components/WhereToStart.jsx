import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const WhereToStart = () => {
  return (
    <section className="container py-20" id="start">
      <h2 className="text-3xl font-bold font-playfairDisplay mb-2">
        Doesn't know where to start?
      </h2>
      <p className="text-lg text-body mb-10 max-w-[400px]">
        Starting Your Yogyakarta Journey? Get Inspired Here. Find the best
        places to visit, where to stay, where to eat and drink, and what to do
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-8 gap-x-0 md:gap-x-8">
        <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[400px]">
          <Image
            fill
            src="/images/kuliner.jpg"
            alt="kuliner"
            className="rounded w-full h-full object-cover bg-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-end gap-8 p-12">
            <div>
              <h3 className="text-white text-xl font-bold">
                Best Yogyakarta's Culinary Selection
              </h3>
              <p className="text-white text-body line-clamp-2">
                Find the best places to eat and drink in Yogyakarta. From street
                food to fine dining.
              </p>
            </div>
            <Link href="/culinary">
              <Button className="bg-white gap-2 flex items-center justify-center text-primary rounded group">
                Explore{" "}
                <ArrowUpRight
                  size={16}
                  className="text-primary group-hover:rotate-45 group-hover:ml-4 duration-300"
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[400px]">
          <Image
            fill
            src="/images/wayang.jpg"
            alt="wayang"
            className="rounded w-full h-full object-cover bg-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-end gap-8 p-12">
            <div>
              <h3 className="text-white text-xl font-bold">
                Experience Yogyakarta's Vibrant Events
              </h3>
              <p className="text-white text-body line-clamp-2">
                Immerse yourself in the cultural richness of Yogyakarta through
                its lively events and festivals
              </p>
            </div>
            <Link href="/event">
              <Button className="bg-white gap-2 flex items-center justify-center text-primary rounded group">
                Explore{" "}
                <ArrowUpRight
                  size={16}
                  className="text-primary group-hover:rotate-45 group-hover:ml-4 duration-300"
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[400px]">
          <Image
            fill
            src="/images/attraction.jpg"
            alt="attraction"
            className="rounded w-full h-full object-cover bg-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-end gap-8 p-12">
            <div>
              <h3 className="text-white text-xl font-bold">
                Explore Yogyakarta's Must-See Attractions
              </h3>
              <p className="text-white text-body line-clamp-2">
                Discover the wonders of Yogyakarta's rich heritage and natural
                beauty at its iconic attractions and landmarks.
              </p>
            </div>
            <Button className="bg-white gap-2 flex items-center justify-center text-primary rounded group">
              Explore{" "}
              <ArrowUpRight
                size={16}
                className="text-primary group-hover:rotate-45 group-hover:ml-4 duration-300"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToStart;

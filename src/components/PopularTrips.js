import Image from "next/image";
import React from "react";
import OverlayImage from "./OverlayImage";
import { Timer } from "lucide-react";
import Button from "./Button";

const PopularTrips = () => {
  return (
    <section className="container py-10">
      <h2 className="text-3xl font-bold font-playfairDisplay mb-2">
        Popular Trips
      </h2>
      <p className="text-lg text-body mb-10 max-w-screen-sm">
        Discover the best trips from our local experts. Choose from a wide
        variety of curated trips to the most amazing destinations in Yogyakarta.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <TripCard />
        <TripCard />
        <TripCard />
      </div>
    </section>
  );
};

export default PopularTrips;

const TripCard = ({ title, image, duration, price }) => {
  return (
    <div className="bg-white rounded-lg border shadow overflow-hidden">
      <OverlayImage
        src="/images/prambanan.jpg"
        alt="Popular Trips 1"
        width={300}
        height={200}
        overlay={false}
      />
      <div className="p-4 bg-white rounded-t-3xl -mt-10 relative">
        <h3 className="text-lg font-bold mb-2">
          Heritage & Nature Discovery Trips
        </h3>
        <p className="text-body line-clamp-3">
          Immerse yourself in the rich cultural heritage and stunning natural
          landscapes of Yogyakarta on this 4-day journey. From ancient temples
          to scenic countryside, experience the best of Java's cultural
          heartland.
        </p>
        <hr className="my-4 border-body" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Timer size={20} />
            <p className="text-body">4 days</p>
          </div>
          <div>
            <span className="text-body">Start from</span>
            <span className="text-primary font-bold"> Rp 600.000,-</span>
          </div>
        </div>
        <Button variant="outlined" className="w-full mt-4">
          View Details
        </Button>
      </div>
    </div>
  );
};

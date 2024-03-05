import Image from "next/image";
import React from "react";
import OverlayImage from "./OverlayImage";
import { Timer } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

const PopularTrips = () => {
  return (
    <section className="container py-10" id="trips">
      <h2 className="text-3xl font-bold font-playfairDisplay mb-2">
        Popular Trips
      </h2>
      <p className="text-lg text-body mb-10 max-w-screen-sm">
        Discover the best trips from our local experts. Choose from a wide
        variety of curated trips to the most amazing destinations in Yogyakarta.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <TripCard
          title="Heritage & Nature Discovery Trips"
          image="/images/prambanan.jpg"
          duration="3 days"
          price="Rp 1.000.000,-"
          description={`Immerse yourself in the rich cultural heritage and stunning natural
          landscapes of Yogyakarta on this 4-day journey. From ancient temples
          to scenic countryside, experience the best of Java's cultural
          heartland.`}
        />
        <TripCard
          title="Cultural & Culinary Adventure"
          image="/images/batik.jpg"
          duration="4 days"
          price="Rp 1.500.000,-"
          description={`Discover the rich culture and culinary heritage of Yogyakarta on this
          4-day adventure. From ancient temples to traditional markets, explore
          the best of Java's cultural heartland.`}
        />
        <TripCard
          title="Nature & Adventure Trips"
          image="/images/merapi.jpg"
          duration="2 days"
          price="Rp 800.000,-"
          description={`Embark on an unforgettable adventure to the heart of Yogyakarta's
          natural wonders. From scenic landscapes to thrilling activities,
          experience the best of Java's natural beauty.`}
        />
      </div>
    </section>
  );
};

export default PopularTrips;

const TripCard = ({ title, image, duration, price, description }) => {
  return (
    <div className="bg-white rounded-lg border shadow overflow-hidden">
      <OverlayImage
        src={image}
        alt="Popular Trips 1"
        width={300}
        height={200}
        overlay={false}
        className={"w-full h-48"}
      />
      <div className="p-4 bg-white rounded-t-3xl -mt-10 relative">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-body line-clamp-3">{description}</p>
        <hr className="my-4 border-body" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Timer size={20} />
            <p className="text-body">{duration}</p>
          </div>
          <div>
            <span className="text-body">Start from</span>
            <span className="text-primary font-bold"> {price}</span>
          </div>
        </div>
        <Link href="/tour">
          <Button variant="outlined" className="w-full mt-4">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

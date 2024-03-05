"use client";
import Button from "@/components/Button";
import DestinationSelect from "@/components/DestinationSelect";
import Navbar from "@/components/Navbar";
import TourTypeSelect from "@/components/TourTypeSelect";
import { Flag, MapPin, Search, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const Tour = () => {
  const CARDS = [<Card1 key={1} />, <Card2 key={2} />, <Card3 key={3} />];
  const searchParams = useSearchParams();
  const tourTypes = searchParams.get("tourType");
  const destination = searchParams.get("destination");

  const [cards, setCards] = useState(CARDS);

  const handleSearch = () => {
    // randomize the cards

    setCards(CARDS.sort(() => Math.random() - 0.5));
  };

  return (
    <Suspense>
      <Navbar primary />
      <div className="container my-10">
        <h1 className="text-4xl font-bold text-center font-playfairDisplay">
          Guide
        </h1>
        <div className="bg-white p-4 md:rounded-full shadow flex items-start flex-col md:flex-row gap-4 border md:items-center justify-between max-w-2xl mx-auto mt-10">
          <div className="flex items-center gap-2">
            <div className="p-2 border rounded-full border-body h-max">
              <MapPin size={24} className="text-body" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">Where</h3>
              <DestinationSelect value={destination || "all-yogyakarta"} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 border rounded-full border-body h-max">
              <Flag size={24} className="text-body" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">Tour Types</h3>
              <TourTypeSelect value={tourTypes || "all-tour-types"} />
            </div>
          </div>
          <Button
            className="bg-primary gap-2 hidden items-center justify-center text-white rounded-full md:flex"
            onClick={handleSearch}
          >
            <Search size={20} className="text-white" /> Find
          </Button>
        </div>
        <Button
          className="bg-primary gap-2 flex items-center justify-center text-white rounded-full md:hidden w-full mt-4"
          onClick={handleSearch}
        >
          <Search size={20} className="text-white" />
          <span>Find</span>
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {cards.map((card) => card)}
        </div>
      </div>
    </Suspense>
  );
};

export default Tour;

export const Card1 = () => {
  return (
    <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1604143054925-9fcc06770b17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          Verified
        </span>
        <h2 className="mt-2 mb-2  font-bold">Adi Nugroho</h2>
        <p className="text-sm">
          Selamat datang! My name is Adi, and I'm your friendly neighborhood
          tour guide with a passion for adventure and exploration. Born and
          raised in Sleman, I have a deep connection with the natural beauty of
          Yogyakarta and love taking travelers off the beaten path to discover
          hidden waterfalls, caves, and hiking trails. Let's embark on an
          unforgettable adventure together!
        </p>
        <div className="mt-3 flex items-center">
          <span className="text-sm font-semibold">start form</span>&nbsp;
          <span className="font-bold text-xl">Rp 200.000</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 border-t border-b text-xs text-gray-700">
        <p className="text-sm">
          <span className="font-semibold">Tour Specialization:</span> Adventure
          Tours, Nature Tours
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span> English, Indonesian
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center text-sm text-gray-600">
          <Star size={16} className="text-orange-500" fill="rgb(249,11,22)" />
          <span className="ml-2">3 Reviews</span>
        </div>
        <Button className="py-1 rounded-full">
          {/* whatsapp link */}
          <Link target="_blank" href="https://wa.me/6281234567890">
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1561648512-2d9c26a7768b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          Verified
        </span>
        <h2 className="mt-2 mb-2  font-bold">Ika Susanto</h2>
        <p className="text-sm">
          Hi, I'm Ika, a passionate tour guide born and raised in Yogyakarta.
          With over 5 years of experience in guiding tourists, I specialize in
          cultural and heritage tours, offering in-depth knowledge about the
          rich history and traditions of Java. I am fluent in English and
          Javanese and love sharing stories about the hidden gems and local
          legends of Yogyakarta.
        </p>
        <div className="mt-3 flex items-center">
          <span className="text-sm font-semibold">start form</span>&nbsp;
          <span className="font-bold text-xl">Rp 250.000</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 border-t border-b text-xs text-gray-700">
        <p className="text-sm">
          <span className="font-semibold">Tour Specialization:</span> Cultural
          Tours, Heritage Tours
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span> English, Indonesian,
          Javanese
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center text-sm text-gray-600">
          <Star size={16} className="text-orange-500" fill="rgb(249,11,22)" />
          <span className="ml-2">5 Reviews</span>
        </div>
        <Button className="py-1 rounded-full">
          {/* whatsapp link */}
          <Link target="_blank" href="https://wa.me/6281234567890">
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1511250503134-89501c53a815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          New
        </span>
        <h2 className="mt-2 mb-2  font-bold">Siti Rahayu</h2>
        <p className="text-sm">
          Halo! I'm Siti, a seasoned tour guide with a knack for culinary
          delights and local delicacies. Growing up in Yogyakarta, I've
          developed a deep appreciation for the diverse flavors and tastes of
          Javanese cuisine. Join me on a culinary journey through bustling
          markets and street food stalls to sample authentic dishes and discover
          the secrets of Javanese cooking. Selamat makan!
        </p>
        <div className="mt-3 flex items-center">
          <span className="text-sm font-semibold">start form</span>&nbsp;
          <span className="font-bold text-xl">Rp 200.000</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 border-t border-b text-xs text-gray-700">
        <p className="text-sm">
          <span className="font-semibold">Tour Specialization:</span> Culinary
          Tours, Market Tours
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span> English, Indonesian
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center text-sm text-gray-600">
          <Star size={16} className="text-orange-500" fill="rgb(249,11,22)" />
          <span className="ml-2">0 Reviews</span>
        </div>
        <Button className="py-1 rounded-full">
          {/* whatsapp link */}
          <Link target="_blank" href="https://wa.me/6281234567890">
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
};

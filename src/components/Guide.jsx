"use client";
import { Check, Flag, LocateIcon, MapIcon, MapPin, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ReactSelect from "react-select";
import DestinationSelect from "./DestinationSelect";
import Button from "./Button";
import TourTypeSelect from "./TourTypeSelect";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Guide = (props) => {
  const [searchValue, setSearchValue] = useState({
    destination: "",
    tourType: "",
  });
  const router = useRouter();

  const handleFind = () => {
    if (searchValue.destination === "" || searchValue.tourType === "") {
      toast.error("Please fill in the destination and tour type");
      return;
    }
    router.push(
      `/guide?destination=${searchValue.destination}&tourType=${searchValue.tourType}`
    );
  };

  return (
    <section className="container py-20">
      <div className="grid grid-cols-12 gap-y-4 md:gap-8 items-center max-h-screen">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-3xl font-bold font-playfairDisplay mb-2">
            Find Your Guide
          </h2>
          <p className="text-lg text-body mb-10 max-w-[400px]">
            Find a local guide to take you on an adventure and explore the
            hidden gems of Yogyakarta.
          </p>
          <div className="bg-white p-4 md:rounded-full shadow flex items-start flex-col md:flex-row gap-4 border md:items-center justify-between max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="p-2 border rounded-full border-body h-max">
                <MapPin size={24} className="text-body" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Where</h3>
                <DestinationSelect
                  value={searchValue.destination}
                  onChange={(value) =>
                    setSearchValue({ ...searchValue, destination: value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 border rounded-full border-body h-max">
                <Flag size={24} className="text-body" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Tour Types</h3>
                <TourTypeSelect
                  value={searchValue.tourType}
                  onChange={(value) =>
                    setSearchValue({ ...searchValue, tourType: value })
                  }
                />
              </div>
            </div>
            <Button
              onClick={handleFind}
              className="bg-primary gap-2 hidden items-center justify-center text-white rounded-full md:flex"
            >
              <Search size={20} className="text-white" /> Find
            </Button>
          </div>
          <Button className="bg-primary gap-2 flex items-center justify-center text-white rounded-full md:hidden w-full mt-4">
            <Search size={20} className="text-white" />
            <span>Find</span>
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 px-4 gap-y-8 md:gap-x-8">
            <div className="flex gap-4 items-center">
              <div className="flex items-center p-2 border-primary border rounded-full">
                <Check size={16} className="text-primary" />
              </div>
              <span>Local Expertise</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center p-2 border-primary border rounded-full">
                <Check size={16} className="text-primary" />
              </div>
              <span>Wide Selection</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center p-2 border-primary border rounded-full">
                <Check size={16} className="text-primary" />
              </div>
              <span>Transparent Pricing</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center p-2 border-primary border rounded-full">
                <Check size={16} className="text-primary" />
              </div>
              <span>Flexible Arrangements</span>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-30px)] w-full hidden relative lg:block lg:col-span-5">
          <Image
            src="/images/guide.jpg"
            alt="guide"
            fill
            className="rounded h-full w-full bg-cover object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;

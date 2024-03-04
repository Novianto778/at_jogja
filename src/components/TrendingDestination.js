"use client";
import Image from "next/image";
import { FollowerPointerCard } from "./FollowingPointer";

const TrendingDestination = () => {
  return (
    <section className="container py-10">
      <h2 className="text-3xl font-bold font-playfairDisplay mb-2">
        Trending Destinations
      </h2>
      <p className="text-lg text-body mb-10 max-w-screen-sm">
        Find out Where Everyone's Going! Discover object-cover the Top
        Destinations in Yogyakarta That Everyone's Talking About Right Now.
      </p>
      <div className="parent">
        <div className="div1 group relative">
          <>
            <>
              <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />

              <Image
                src="/images/gunung-merapi.jpg"
                alt="Borobudur"
                width={600}
                height={800}
                className="rounded w-full h-full bg-cover object-cover"
              />
              <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-600 ease-in-out">
                <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
                <p className="text-white text-body">
                  The most active volcano in Indonesia, located in the center of
                  Java.
                </p>
              </div>
            </>
          </>
        </div>

        <div className="div2 group relative">
          <>
            <>
              {/* overlay */}
              <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />
              <Image
                src="/images/prambanan.jpg"
                alt="Borobudur"
                width={700}
                height={400}
                className="rounded w-full h-full bg-cover object-cover"
              />
              <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-600 ease-in-out">
                <h3 className="text-white text-lg font-bold">
                  Candi Prambanan
                </h3>
                <p className="text-white text-body">
                  The largest Hindu temple in Indonesia
                </p>
              </div>
            </>
          </>
        </div>
        <div className="div3 group relative">
          <>
            <>
              <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />

              <Image
                src="/images/malioboro.jpg"
                alt="Borobudur"
                width={600}
                height={400}
                className="rounded w-full h-full bg-cover object-cover"
              />
              <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-600 ease-in-out z-50">
                <h3 className="text-white text-lg font-bold">
                  Jalan Malioboro
                </h3>
                <p className="text-white text-body">
                  The most famous street in Yogyakarta
                </p>
              </div>
            </>
          </>
        </div>
        <div className="div4 group relative">
          <>
            <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />

            <Image
              src="/images/taman-sari.jpg"
              alt="merapi"
              width={600}
              height={400}
              className="rounded w-full h-full bg-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-600 ease-in-out">
              <h3 className="text-white text-lg font-bold">Taman Sari</h3>
              <p className="text-white text-body">
                The site of a former royal garden of the Sultanate of Yogyakarta
              </p>
            </div>
          </>
        </div>
        <div className="div5 group relative">
          <>
            <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />

            <Image
              src="/images/pantai.jpg"
              alt="pantai parangtritis"
              width={600}
              height={600}
              className="rounded w-full h-full bg-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-600 ease-in-out">
              <h3 className="text-white text-lg font-bold">
                Pantai Parangtritis
              </h3>
              <p className="text-white text-body">
                The most famous beach in Yogyakarta, located in Bantul Regency.
              </p>
            </div>
          </>
        </div>
        <div className="div6 group relative">
          <>
            <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />

            <Image
              src="/images/waduk-sermo.jpg"
              alt="waduk sermo"
              width={600}
              height={600}
              className="rounded w-full h-full bg-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-600 ease-in-out">
              <h3 className="text-white text-lg font-bold">Waduk Sermo</h3>
              <p className="text-white text-body">
                Place to relax and enjoy the beauty of nature.
              </p>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;

import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <section className="container py-10">
      <h2 className="text-3xl font-bold font-playfairDisplay mb-2">
        Stories, Tips and Guide
      </h2>
      <p className="text-lg text-body mb-10 max-w-96">
        Unlock the hidden gems of Yogyakarta with our travel stories, tips and
        guide.
      </p>
      <div className="grid grid-cols-12 gap-y-4 md:gap-8 min-h-[100vh] md:h-[calc(100vh-120px)]">
        <div className="h-full col-span-12 md:col-span-5">
          <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[400px]">
            <Image
              fill
              src="/images/blog/blog-1.jpg"
              alt="Borobudur"
              className="rounded w-full h-full object-cover bg-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-start justify-end p-6 gap-2">
              <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full">
                Stories
              </p>
              <h3 className="text-white text-lg font-bold">
                A Day in the Life of a Yogyakarta Local: Exploring Hidden Gems
              </h3>
              <p className="text-white text-body line-clamp-2">
                Discover the hidden gems of Yogyakarta with our local guide.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 m-0">
          <div className="grid grid-cols-2 grid-rows-none md:grid-rows-2 gap-4 h-full">
            <div className="h-full min-h-[300px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  fill
                  src="/images/blog/blog-2.jpg"
                  alt="Borobudur"
                  className="rounded w-full h-full object-cover bg-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                  <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full">
                    Tips
                  </p>
                  <h3 className="text-white text-lg font-bold">
                    5 Tips for a Perfect Weekend Getaway in Yogyakarta
                  </h3>
                  <p className="text-white text-body line-clamp-2">
                    Discover the hidden gems of Yogyakarta with our local guide.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[300px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  fill
                  src="/images/blog/blog-3.jpg"
                  alt="Borobudur"
                  className="rounded w-full h-full object-cover bg-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                  <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full">
                    Guide
                  </p>
                  <h3 className="text-white text-lg font-bold">
                    3 Days in Yogyakarta: The Ultimate Itinerary
                  </h3>
                  <p className="text-white text-body line-clamp-2">
                    Discover the hidden gems of Yogyakarta with our local guide.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[300px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  fill
                  src="/images/blog/blog-4.jpg"
                  alt="Borobudur"
                  className="rounded w-full h-full object-cover bg-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                  <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full">
                    Guide
                  </p>
                  <h3 className="text-white text-lg font-bold">
                    Top 10 Must-Try Street Foods in Yogyakarta
                  </h3>
                  <p className="text-white text-body line-clamp-2">
                    From savory satay to sweet treats, discover the flavors that
                    make Yogyakarta a food lover's paradise.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[300px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  fill
                  src="/images/blog/blog-5.jpg"
                  alt="Borobudur"
                  className="rounded w-full h-full object-cover bg-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                  <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full">
                    Stories
                  </p>
                  <h3 className="text-white text-lg font-bold">
                    Exploring Kraton: The Sultan's Palace
                  </h3>
                  <p className="text-white text-body line-clamp-2">
                    Here, we'll learn about the city's royal heritage,
                    traditional customs, and the Sultan's role as the spiritual
                    and cultural leader of Yogyakarta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;

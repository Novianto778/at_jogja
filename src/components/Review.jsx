"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Review = (props) => {
  const navigationRef = useRef(null);

  return (
    <section className="relative h-screen w-screen max-w-full md:h-[80vh]">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-30 z-0" />

      <div className="bg-mountain flex items-center justify-center">
        <div className="container relative z-10 grid min-h-[60%] w-[90%] grid-cols-12 gap-y-8 overflow rounded-lg p-12">
          <Image
            src={"/icon/quote.png"}
            width={160}
            height={160}
            alt="quote icon"
            className="absolute -bottom-4 left-10 -z-10 md:block hidden"
          />
          <div className="relative col-span-12 md:col-span-6">
            <p className="text-lg font-medium uppercase text-white">
              Testimonial
            </p>
            <h6 className="max-w-[420px] text-white font-bold font-outfit text-5xl tracking-wide">
              Pendapat tentang{" "}
              <Image
                src="/logo.svg"
                width={200}
                height={200}
                alt="CraftConnect"
                className="inline"
              />
            </h6>
            <div
              className="swiper-pg mt-2 inline-flex gap-x-2 text-left"
              ref={navigationRef}
            ></div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".swiper-pg",
                enabled: true,
                bulletActiveClass: "swiper-active",
              }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
            >
              <SwiperSlide>
                <div className="flex w-full max-w-[500px] flex-col gap-y-4 rounded border bg-white px-6 py-4 text-justify font-medium shadow-md">
                  <p className="text-sm text-gray-500">
                    "I stumbled upon this website while planning my trip to
                    Yogyakarta, and it turned out to be a lifesaver! The layout
                    is user-friendly, and I found everything I needed—from tour
                    guides to attractions to local tips—all in one place. Thanks
                    to this website, my Yogyakarta adventure was smooth and
                    unforgettable. Highly recommended!"
                  </p>
                  <div className="mb-2 flex items-center gap-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={80}
                      height={80}
                      className="h-12 w-12 rounded-full bg-cover object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-black">Sarah W.</p>
                      <p className="text-sm text-gray-400">Travel Blogger</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-full max-w-[500px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                  <p className="text-sm text-gray-500">
                    "As someone who loves to explore off-the-beaten-path
                    destinations, I was delighted to find this website
                    showcasing the hidden gems of Yogyakarta. The information
                    provided was comprehensive, and I particularly enjoyed the
                    blog section, which offered unique insights into local
                    culture and traditions. My only suggestion would be to add
                    more interactive features for user engagement. Overall, a
                    great resource for anyone visiting Yogyakarta!"
                  </p>
                  <div className="mb-2 flex items-center gap-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                      width={80}
                      height={80}
                      className="h-12 w-12 rounded-full bg-cover object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-black">Dian S.</p>
                      <p className="text-sm text-gray-400">Travel Enthusiast</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-full max-w-[500px] flex-col gap-y-4 rounded border bg-white px-6 py-4 font-medium shadow-md">
                  <p className="text-sm text-gray-500">
                    "I used this website to book a culinary tour during my
                    recent trip to Yogyakarta, and I was impressed by the
                    selection of tour guides and experiences available. The
                    booking process was straightforward, and the tour guide we
                    had was knowledgeable and friendly. The only reason I'm not
                    giving it a perfect score is that I wish there were more
                    options for budget travelers. Nevertheless, I had a
                    fantastic time and would definitely use this website again
                    for future trips."
                  </p>
                  <div className="mb-2 flex items-center gap-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                      width={80}
                      height={80}
                      className="h-12 w-12 rounded-full bg-cover object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-black">Robby Pratama</p>
                      <p className="text-sm text-gray-400">Food Enthusiast</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

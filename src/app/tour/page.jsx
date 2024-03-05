"use client";

import { ArrowLeft, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import Button from "@/components/Button";

const TourDetail = () => {
  return (
    <div className="!container">
      <a href="/" className="flex items-center gap-4 mt-4">
        <ArrowLeft />
        <span>Back</span>
      </a>
      <div className="">
        <div className="tour-head">
          <div className="tour-head-left">
            <div className="tour-title">Heritage & Nature Discovery Trips</div>
            <div className="tour-overview">
              <div className="tour-overview-item">
                <span>3</span> days
              </div>
              <div className="tour-overview-item">
                <span className="material-icons-outlined"> star </span>
                <span>4.7</span> (55 reviews)
              </div>
            </div>
          </div>
        </div>
        <div className="tour-wrapper">
          <div className="tour-content">
            <div className="tour-hero">
              <div className="tour-image"></div>
            </div>
            <div className="tour-content-block">
              <div className="tour-description">
                Our Cultural Exploration Tour offers a unique opportunity to
                delve deep into the soul of Yogyakarta, where centuries-old
                temples stand in harmony with bustling markets, and age-old
                traditions come to life amidst the backdrop of modernity. Led by
                knowledgeable local guides, our tour takes you on a captivating
                journey through Yogyakarta's most iconic landmarks, immersive
                cultural experiences, and off-the-beaten-path gems.
              </div>
            </div>
            <div className="tour-content-block">
              <div className="tour-content-title">Places You’ll See</div>
              <div className="tour-places">
                <Swiper
                  className="swiper"
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 3000,
                  }}
                  loop={true}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-image">
                      <img
                        src="https://images.unsplash.com/photo-1556375403-b96342fc0ee2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image"
                      />
                    </div>
                    <div className="swiper-title">Gunung Merapi</div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-image">
                      <img
                        src="https://visitingjogja.jogjaprov.go.id/wp-content/uploads/2020/03/134749519_1063110144208705_2545271039243575160_n-768x512.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="swiper-title">Pule Payung</div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-image">
                      <img
                        src="https://nagantour.com/wp-content/uploads/2023/09/Air-terjun-grojogan-sewu.webp"
                        alt="image"
                      />
                    </div>
                    <div className="swiper-title">Grojongan Sewu Waterfall</div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-image">
                      <img src="/images/prambanan.jpg" alt="image" />
                    </div>
                    <div className="swiper-title">Candi Prambanan Temple</div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="tour-content-block">
              <div className="tour-content-title mb-8">Timeline</div>
              <div className="tour-itinerary">
                <div className="accordion">
                  <AccordionItem
                    title="Introduction"
                    content="Embark on a captivating journey through the heart of Java with our Cultural Exploration Tour of Yogyakarta. Immerse yourself in the rich tapestry of Javanese heritage, as we take you on a curated adventure to discover the hidden gems, ancient traditions, and vibrant culture of this enchanting city."
                  />

                  {/* make day 1 to 3 from place youll se */}
                  <AccordionItem
                    initialActive={false}
                    title="Day 1: Gunung Merapi"
                    content="Start your day with a visit to the iconic Gunung Merapi, an active stratovolcano that offers breathtaking views of the surrounding landscape. You will have the opportunity to explore the volcano's rugged terrain, learn about its geological history, and witness the awe-inspiring power of nature. Afterward, we will continue our journey to Pule Payung, a hidden gem nestled amidst lush greenery, where you can relax and unwind in the midst of nature's tranquility."
                  />
                  <AccordionItem
                    initialActive={false}
                    title="Day 2: Grojongan Sewu Waterfall"
                    content="After breakfast, we will embark on a scenic drive to Grojongan Sewu Waterfall, a stunning natural wonder that cascades down a series of terraced cliffs. You will have the opportunity to hike through the lush forest, swim in the crystal-clear pools, and marvel at the beauty of the surrounding landscape. Afterward, we will visit Candi Prambanan Temple, a UNESCO World Heritage Site that showcases the exquisite craftsmanship of ancient Javanese architecture."
                  />
                  <AccordionItem
                    initialActive={false}
                    title="Day 3: End of Tour"
                    content={
                      "After the tour, you will have the opportunity to explore the city at your own pace, visit local markets, or indulge in some last-minute souvenir shopping. Our guide will accompany you to the airport for your departure, where you can bid farewell to Yogyakarta and take home cherished memories of your cultural exploration tour."
                    }
                  />
                </div>
              </div>
            </div>
            <div className="tour-content-block">
              <div className="tour-content-title">Customer Reviews</div>
              <div className="tour-reviews">
                <div className="tour-reviews-feedback">
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon">
                        <span className="material-icons-outlined">earbuds</span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Itinerary
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.8</div>
                  </div>
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon">
                        <span className="material-icons-outlined">
                          record_voice_over
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">Guide</div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.9</div>
                  </div>
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon">
                        <span className="material-icons-outlined">
                          directions_bus
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Transport
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.9</div>
                  </div>
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon">
                        <span className="material-icons-outlined">hotel</span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Accommodation
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.5</div>
                  </div>
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon">
                        <span className="material-icons-outlined">
                          restaurant
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">Food</div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.6</div>
                  </div>
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon">
                        <span className="material-icons-outlined">support</span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Tour Operator
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Travel Walk
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.5</div>
                  </div>
                </div>
                <div className="tour-reviews-overall">
                  <div className="tour-reviews-content">
                    <div className="tour-reviews-overall-title">
                      Overall Rating
                    </div>
                    <div className="tour-reviews-overall-text">Excellent</div>
                    <div className="tour-reviews-overall-rating">4.8</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tour-content-block">
              <div className="tour-help">
                <div className="tour-help-inner">
                  <div className="tour-help-content">
                    <div className="tour-help-title">Need Help Booking?</div>
                    <div className="tour-help-text">
                      Call our customer services team on the number below to
                      speak to one of our advisors who will help you with all of
                      your holiday needs.
                    </div>
                  </div>
                  <div className="tour-help-call">
                    <span className="material-icons-outlined"> call </span>
                    <div className="tour-help-call-text">+62812345678</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tour-sidebar">
            <div className="tour-receipt">
              <div className="tour-receipt-head">
                <div className="tour-amount">
                  <span className="tour-amount-old !text-base">
                    Rp 1.200.000,-
                  </span>{" "}
                  <p className="!text-xl">
                    Rp 1.080.000,-
                    <span>/person</span>
                  </p>
                </div>
                <div className="tour-discount">-10%</div>
              </div>
              <div className="tour-receipt-select">
                <div className="tour-receipt-select-top">
                  <div className="tour-receipt-select-item">
                    <div className="tour-receipt-select-icon">
                      <span className="material-icons-outlined">
                        calendar_month
                      </span>
                    </div>
                    <div className="tour-receipt-select-content">
                      <div className="tour-receipt-select-title">07 May</div>
                      <div className="tour-receipt-select-text">Check in</div>
                    </div>
                  </div>
                  <div className="tour-receipt-select-item">
                    <div className="tour-receipt-select-icon">
                      <span className="material-icons-outlined">
                        event_available
                      </span>
                    </div>
                    <div className="tour-receipt-select-content">
                      <div className="tour-receipt-select-title">16 May</div>
                      <div className="tour-receipt-select-text">Check out</div>
                    </div>
                  </div>
                </div>
                <div className="tour-receipt-select-bottom">
                  <div className="tour-receipt-select-item">
                    <div className="tour-receipt-select-icon">
                      <span className="material-icons-outlined">
                        person_outline
                      </span>
                    </div>
                    <div className="tour-receipt-select-content">
                      <div className="tour-receipt-select-title">3 Guests</div>
                      <div className="tour-receipt-select-text">Guests</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-receipt-detail">
                <div className="tour-receipt-detail-item">
                  <div className="tour-receipt-detail-title">
                    Rp 1.200.000 x 3 guests
                  </div>
                  <div className="tour-receipt-detail-price">
                    <span>Rp 3.600.000</span>
                  </div>
                </div>
                <div className="tour-receipt-detail-item">
                  <div className="tour-receipt-detail-title">
                    10% off discount
                  </div>
                  <div className="tour-receipt-detail-price">
                    -<span>Rp 360.000</span>
                  </div>
                </div>
                <div className="tour-receipt-detail-item">
                  <div className="tour-receipt-detail-title">Service fee</div>
                  <div className="tour-receipt-detail-price">$0</div>
                </div>
                <div className="tour-receipt-detail-item tour-receipt-detail-total">
                  <div className="tour-receipt-detail-title">Total</div>
                  <div className="tour-receipt-detail-price">
                    <span>Rp 3.240.000</span>
                  </div>
                </div>
              </div>
              <div className="tour-receipt-button !gap-2 !items-center">
                <button className="tour-favorite">
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                </button>
                <Link
                  className="flex-1"
                  target="_blank"
                  href={
                    "https://wa.me/62812345678?text=I%20want%20to%20book%20the%20tour%20Heritage%20%26%20Nature%20Discovery%20Trips%20on%2007%20May%20-%2016%20May%20for%203%20guests"
                  }
                >
                  <Button className={"w-full rounded-full"}>Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;

const AccordionItem = ({ title, content, initialActive = true }) => {
  const [isActive, setIsActive] = useState(initialActive || false);

  console.log(isActive);

  return (
    <div className="accordion-panel accordion-introduction pb-8">
      <div className="flex justify-between font-semibold text-lg">
        <p>{title}</p>
        <div
          onClick={() => setIsActive(!isActive)}
          className="accordion-trigger z-50"
        >
          {isActive ? <Minus /> : <Plus />}
        </div>
      </div>
      {isActive && (
        <div className="">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

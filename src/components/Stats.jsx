"use client";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";

const Stats = () => {
  useCountUp({
    ref: "destinations",
    start: 0,
    end: 100,
    enableScrollSpy: true,
    scrollSpyDelay: 0,
    duration: 2,
  });
  useCountUp({
    ref: "tour-guide",
    start: 0,
    end: 60,
    enableScrollSpy: true,
    scrollSpyDelay: 0,

    duration: 2,
  });

  useCountUp({
    ref: "culture",
    start: 0,
    end: 20,
    enableScrollSpy: true,
    scrollSpyDelay: 0,

    duration: 2,
  });

  return (
    <section className="container grid grid-cols-1 md:grid-cols-3 gap-y-16 md:justify-items-center py-20">
      <div className="flex gap-4 items-center">
        <Image
          src="/icon/arrival.png"
          width={64}
          height={64}
          alt="destination"
          className="object-cover"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">
            <span id="destinations"></span>+
          </h3>
          <p className="text-body text-center">Destinations</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/icon/tour-guide.png"
          width={64}
          height={64}
          alt="tour-guide"
          className="object-cover"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">
            <span id="tour-guide"></span>+
          </h3>
          <p className="text-body text-center">Tour Guides</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          src="/icon/batik.png"
          width={64}
          height={64}
          alt="destination"
          className="object-cover"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">
            <span id="culture"></span>+
          </h3>
          <p className="text-body text-center">Cultures &amp; Heritages</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

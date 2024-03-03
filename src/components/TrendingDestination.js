import Image from "next/image";

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
              <Image
                src="/images/gunung-merapi.jpg"
                alt="Borobudur"
                width={300}
                height={800}
                className="rounded w-full h-full bg-cover object-cover"
              />
              <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-300 ease-in-out">
                <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
                <p className="text-white text-body">
                  The most active volcano in Indonesia, located in the center of
                  Java.
                </p>
              </div>
            </>
          </>
        </div>

        <div className="div2">
          <>
            <>
              <Image
                src="/images/prambanan.jpg"
                alt="Borobudur"
                width={700}
                height={400}
                className="rounded w-full h-full bg-cover object-cover"
              />
              <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-300 ease-in-out">
                <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
                <p className="text-white text-body">
                  The most active volcano in Indonesia, located in the center of
                  Java.
                </p>
              </div>
            </>
          </>
        </div>
        <div className="div3">
          <>
            <>
              <Image
                src="/images/malioboro.jpg"
                alt="Borobudur"
                width={300}
                height={200}
                className="rounded w-full h-full bg-cover object-cover"
              />
              <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-300 ease-in-out">
                <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
                <p className="text-white text-body">
                  The most active volcano in Indonesia, located in the center of
                  Java.
                </p>
              </div>
            </>
          </>
        </div>
        <div className="div4">
          <>
            <Image
              src="/images/merapi.jpg"
              alt="merapi"
              width={300}
              height={200}
              className="rounded w-full h-full bg-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-300 ease-in-out">
              <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
              <p className="text-white text-body">
                The most active volcano in Indonesia, located in the center of
                Java.
              </p>
            </div>
          </>
        </div>
        <div className="div5">
          <>
            <Image
              src="/images/pantai.jpg"
              alt="pantai parangtritis"
              width={600}
              height={300}
              className="rounded w-full h-full bg-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-300 ease-in-out">
              <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
              <p className="text-white text-body">
                The most active volcano in Indonesia, located in the center of
                Java.
              </p>
            </div>
          </>
        </div>
        <div className="div6">
          <>
            <Image
              src="/images/waduk-sermo.jpg"
              alt="waduk sermo"
              width={600}
              height={300}
              className="rounded w-full h-full bg-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 group-hover:opacity-100 duration-300 ease-in-out">
              <h3 className="text-white text-lg font-bold">Gunung Merapi</h3>
              <p className="text-white text-body">
                The most active volcano in Indonesia, located in the center of
                Java.
              </p>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;

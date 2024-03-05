import ModalVideo from "./ModalVideo";
import OverlayImage from "./OverlayImage";

const Video = () => {
  return (
    <section className="py-10">
      <div className="container relative">
        <OverlayImage
          src="/images/mountain.jpg"
          alt="Video"
          width={1200}
          height={800}
          className="rounded-lg aspect-auto md:aspect-[16/7]"
          overlayClassname="bg-black bg-opacity-50 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-heading text-white font-bold mb-4 font-playfairDisplay">
            Discover Yogyakarta
          </h2>
          <p className="text-white text-subheading max-w-screen-sm w-[85vw] text-center">
            Explore the diverse and enchanting landscapes, cultures, and
            experiences that Yogyakarta has to offer.
          </p>
          <ModalVideo className={"mt-4 md:mt-8"} />
        </div>
      </div>
    </section>
  );
};

export default Video;

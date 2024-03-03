import Image from "next/image";

const Footer = (props) => {
  return (
    <footer className="bg-black py-16">
      <div className="container grid grid-cols-12 gap-y-8 text-white md:gap-x-12">
        <div className="col-span-12 flex flex-col gap-y-8 md:col-span-3">
          <Image
            src="/logo.svg"
            width={500}
            height={500}
            alt="logo"
            className="w-full max-w-[200px]"
          />
          <p className="text-sm font-medium">
            Explore Yogyakarta effortlessly with our expert guide, packed with
            curated recommendations and user-friendly features
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-3 gap-x-8">
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold">Company</h2>
              <p className="text-sm font-medium">About</p>
              <p className="text-sm font-medium">Help</p>
              <p className="text-sm font-medium">FAQ</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold">Contact</h2>
              <p className="text-sm font-medium">(+62) 822221</p>
              <p className="text-sm font-medium">atjogja@gmail.com</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold">Other</h2>
              <p className="text-sm font-medium">News</p>
              <p className="text-sm font-medium">Policy</p>
              <p className="text-sm font-medium">Blog</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex flex-col gap-y-4 md:col-span-3">
          <h2 className="font-semibold">Follow Us</h2>
          <div className="flex gap-x-4">
            <div className="h-8 w-8 cursor-pointer rounded-full">
              <Image
                src="/icon/facebook.svg"
                width={50}
                height={50}
                alt="facebook"
              />
            </div>
            <div className="h-8 w-8 cursor-pointer rounded-full">
              <Image
                src="/icon/instagram.svg"
                width={50}
                height={50}
                alt="instagram"
              />
            </div>
            <div className="h-8 w-8 cursor-pointer rounded-full">
              <Image
                src="/icon/twitter.svg"
                width={50}
                height={50}
                alt="twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

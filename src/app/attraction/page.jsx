import Navbar from "@/components/Navbar";
import React from "react";

const Attraction = () => {
  return (
    <main>
      <Navbar primary />
      <div className="container my-10">
        <h1 className="text-4xl font-bold text-center font-playfairDisplay">
          Attraction
        </h1>
        <p className="text-lg text-body text-center max-w-screen-sm mx-auto mt-4">
          Discover the Best of Yogyakarta: Explore the City's Most Iconic
          Attractions. From Historical Landmarks to Natural Wonders, There's
          Something for Everyone to Enjoy
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://images.pexels.com/photos/16164572/pexels-photo-16164572/free-photo-of-women-posing-together-in-prambanan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="prambanan"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Candi Prambanan</h3>
              <p className="line-clamp-4">
                Step into the realm of ancient Java at Prambanan Temple, a
                mesmerizing UNESCO World Heritage Site. Marvel at the towering
                spires and intricate carvings of this 9th-century Hindu temple
                complex, as you immerse yourself in the rich history and
                mythology of Indonesia's cultural heartland.
              </p>
              <div className="py-2 border-y mt-2 flex flex-col gap-2">
                <div className="flex flex-col">
                  <p className="text-primary text-sm font-bold">
                    Opening Hours
                  </p>
                  <p className="text-body">
                    Monday - Sunday: 6:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1631002164869-a030d817addc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="malioboro"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Jalan Malioboro</h3>
              <p className="line-clamp-4">
                Experience the heartbeat of Yogyakarta at Malioboro Street,
                where history meets modernity in a whirlwind of colors, sounds,
                and flavors. Explore vibrant markets, indulge in local
                delicacies, and immerse yourself in the bustling energy of this
                iconic thoroughfare, where every corner holds a story waiting to
                be discovered.
              </p>
              <div className="py-2 border-y mt-2 flex flex-col gap-2">
                <div className="flex flex-col">
                  <p className="text-primary text-sm font-bold">
                    Opening Hours
                  </p>
                  <p className="text-body">Monday - Sunday: 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://www.yogyes.com/id/yogyakarta-tourism-object/other/heha-sky-view/1.jpg"
              alt="heha sky view"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Heha Sky View</h3>
              <p className="line-clamp-4">
                Take in the panoramic views of Yogyakarta from Heha Sky View, a
                stunning hilltop destination that offers a breathtaking
                perspective of the city and its surrounding landscapes. Whether
                you're enjoying a leisurely stroll through the lush gardens or
                savoring a delicious meal at the on-site restaurant, Heha Sky
                View promises an unforgettable experience for all who visit.
              </p>
              <div className="py-2 border-y mt-2 flex flex-col gap-2">
                <div className="flex flex-col">
                  <p className="text-primary text-sm font-bold">
                    Opening Hours
                  </p>
                  <p className="text-body">
                    Monday - Sunday: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Attraction;

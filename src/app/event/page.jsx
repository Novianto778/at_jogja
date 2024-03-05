import Navbar from "@/components/Navbar";
import React from "react";

const Culinary = () => {
  return (
    <main>
      <Navbar primary />
      <div className="container my-10">
        <h1 className="text-4xl font-bold text-center font-playfairDisplay">
          Events
        </h1>
        <p className="text-lg text-body text-center max-w-screen-sm mx-auto mt-4">
          Stay Updated on Yogyakarta's Dynamic Event Scene: Never Miss Out on
          the Latest Happenings
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1554037895-b5ec1389b928?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gudeg"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Yogyakarta Arts Festival</h3>
              <p className="line-clamp-4">
                Experience the vibrant culture and creativity of Yogyakarta at
                the annual Yogyakarta Arts Festival. Spanning a month-long
                celebration, this festival showcases a diverse array of artistic
                performances, exhibitions, workshops, and cultural events,
                highlighting the city's rich heritage and contemporary arts
                scene. From traditional Javanese dance and music performances to
                modern art installations and street art, there's something for
                everyone to enjoy. Join us as we celebrate the arts and culture
                of Yogyakarta and immerse ourselves in the dynamic spirit of
                creativity and expression.
              </p>
              <div className="py-2 border-y mt-2 flex flex-col gap-2">
                <div className="flex flex-col">
                  <p className="text-primary text-sm font-bold">Date</p>
                  <p className="text-body">July 1 - July 3, 2024</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-primary text-sm font-bold">Location</p>
                  <p className="text-body">Yogyakarta Cultural Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Culinary;

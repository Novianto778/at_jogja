import Navbar from "@/components/Navbar";
import React from "react";

const Culinary = () => {
  return (
    <main>
      <Navbar primary />
      <div className="container my-10">
        <h1 className="text-4xl font-bold text-center font-playfairDisplay">
          Culinary
        </h1>
        <p className="text-lg text-body text-center max-w-screen-sm mx-auto mt-4">
          Yogyakarta is a city that is rich in culture and history. The city is
          also known for its culinary delights. Yogyakarta is home to a variety
          of traditional foods that are unique to the region. The city is also
          known for its street food, which is a popular choice for locals and
          tourists alike. Here are some of the must-try foods in Yogyakarta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://cdn-1.timesmedia.co.id/images/2022/12/21/gudeg-2.jpg"
              alt="Gudeg"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Gudeg</h3>
              <p>
                Gudeg is a traditional Javanese cuisine from Yogyakarta and
                Central Java, Indonesia. Gudeg is made from young unripe jack
                fruit (Javanese: gori, Indonesian: nangka muda) stewed for
                several hours with palm sugar, and coconut milk. Additional
                spices include garlic, shallot, candlenut, coriander seed,
                galangal, bay leaves, and teak leaves, the latter giving a
                reddish-brown color to the dish.
              </p>
            </div>
          </div>

          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://nibble-images.b-cdn.net/nibble/original_images/Bakpia_terenak_di_Jogja_ba005c0c05_uC3l4lJe3.jpg"
              alt="Bakpia"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Bakpia</h3>
              <p>
                Bakpia Pathok is a type of bakpia, a popular Indonesian
                traditional sweet pastry, originally from Yogyakarta. Bakpia
                Pathok is a small, round-shaped Indonesian traditional sweet
                pastry, usually filled with mung bean paste. The outer skin is
                made from wheat flour.
              </p>
            </div>
          </div>
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://o-cdn-cas.sirclocdn.com/parenting/images/Makanan_Khas_Jogja_Sate_Klatak.width-800.format-webp.webp"
              alt="sate klatak"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Sate Klatak</h3>
              <p>
                Sate Klathak is a traditional food from Yogyakarta. The
                difference between Sate Klathak and other satay is the size of
                the meat. Sate Klathak uses goat meat and is served with a
                special sauce. The meat is cut into small pieces and then
                skewered with a bicycle wheel spoke. The meat is then grilled
                over a charcoal fire.
              </p>
            </div>
          </div>
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://o-cdn-cas.sirclocdn.com/parenting/images/Makanan_Khas_Jogja_Mangut_Lele.width-500.format-webp.webp"
              alt="mangut lele"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Mangut Lele</h3>
              <p>
                Mangut Lele is a traditional food from Yogyakarta. Mangut Lele
                is a dish made from catfish that is cooked with coconut milk and
                various spices. The catfish is then cooked until the coconut
                milk is absorbed. Mangut Lele is usually served with rice and
                vegetables.
              </p>
            </div>
          </div>
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://o-cdn-cas.sirclocdn.com/parenting/images/Makanan_Khas_Jogja_Oseng-Oseng_Me.width-500.format-webp.webp"
              alt="oseng-oseng mercon"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Oseng-Oseng Mercon</h3>
              <p>
                Oseng-Oseng Mercon is a traditional food from Yogyakarta. Oseng
                Oseng Mercon is a spicy stir-fried beef dish that is cooked with
                various spices. The beef is then cooked until the spices are
                absorbed. Oseng-Oseng Mercon is usually served with rice and
                vegetables.
              </p>
            </div>
          </div>
          <div className="bg-white shadow border rounded-lg">
            <img
              src="https://o-cdn-cas.sirclocdn.com/parenting/images/Makanan_Khas_Jogja_Kue_Kipo.width-500.format-webp.webp"
              alt="kue kipo"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Kue Kipo</h3>
              <p>
                Kue Kipo is a traditional food from Yogyakarta. Kue Kipo is a
                sweet snack made from glutinous rice flour and filled with
                various flavors such as green beans, chocolate, and cheese. Kue
                Kipo is usually served as a snack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Culinary;

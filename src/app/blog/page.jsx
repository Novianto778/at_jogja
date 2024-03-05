import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white antialiased">
        <div class="px-4 mx-auto max-w-screen-xl">
          <div className="mx-auto w-full max-w-2xl format format-sm mb-12">
            <Link href="/" className="flex items-center gap-4 mt-4">
              <ArrowLeft />
              <span>Back</span>
            </Link>
          </div>
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    class="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p class="text-base text-gray-500">Traveler &amp; Writer</p>
                    <p class="text-base text-gray-500">
                      <time
                        pubdate
                        datetime="2024-02-08"
                        title="February 8th, 2024"
                      >
                        February 8th, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                A Day in the Life of a Yogyakarta Local: Exploring Hidden Gems
              </h1>
            </header>
            <div className="prose">
              <p class="lead">
                Ever wondered what it's like to experience Yogyakarta like a
                local? Join us on a journey through the bustling streets and
                hidden alleys of this enchanting city as we uncover the hidden
                gems and best-kept secrets known only to the locals.
              </p>
              <p>
                Rise and shine! Our day begins with a stroll through the vibrant
                streets of Malioboro, where the aroma of freshly brewed kopi
                joss fills the air. As the city awakens, we weave through the
                bustling market stalls, admiring colorful batik fabrics and
                savoring traditional Javanese snacks from street vendors.
              </p>
              <figure className="mt-4">
                <img
                  src="https://scontent.fjog3-1.fna.fbcdn.net/v/t1.6435-9/132353818_10157526232652477_6753935406913363230_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=HdIbvyAUTxIAX-5e0p0&_nc_ht=scontent.fjog3-1.fna&oh=00_AfBmVLEk5naxHZpBfgz3aOPUVBsn1HSRPULQkEVKG9NUQQ&oe=660E0A98"
                  alt=""
                  className="h-[300px] w-full bg-cover object-cover rounded"
                />
              </figure>
              <p>
                Next, we make our way to the Sultan's Palace (Kraton), the heart
                of Yogyakarta's rich cultural heritage. Stepping through the
                grand entrance, we are transported back in time to the era of
                Javanese royalty, as our knowledgeable guide shares tales of the
                sultans and their royal traditions.
              </p>
              <p>
                No visit to Yogyakarta is complete without indulging in its
                mouthwatering culinary delights. We head to a local warung to
                feast on gudeg, a traditional Javanese dish made with jackfruit,
                served with savory krecek and spicy sambal. With each bite, we
                savor the flavors of Java and the warmth of Indonesian
                hospitality.
              </p>
              <p>
                With our appetites satisfied, we set out to uncover Yogyakarta's
                hidden treasures. Venturing off the beaten path, we stumble upon
                Taman Sari Water Castle, a serene oasis hidden amidst the
                bustling city. As we explore the ancient ruins and secret
                passages, we are reminded of the city's rich history and
                cultural heritage.
              </p>
              <p>
                As the day draws to a close, we make our way to Parangtritis
                Beach to witness the breathtaking sunset over the Indian Ocean.
                With the sound of crashing waves and the golden glow of the sun
                sinking below the horizon, we reflect on the beauty of
                Yogyakarta and the unforgettable experiences of the day.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Blog;

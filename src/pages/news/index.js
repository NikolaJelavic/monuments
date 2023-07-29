import Header from "../../../src/components/Header";
import Navbar from "../navbar/navbar";
import { useRouter } from "next/router";
import Image from "next/image";

export default function News() {
  const router = useRouter();

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    router.push(url);
  };

  return (
    <>
      <Header />
      <Navbar />
      <section class="py-24 lg:pt-28 lg:pb-32 bg-white overflow-hidden">
        <div class="container px-4 mx-auto">
          <h2 class="font-heading mb-12 text-6xl tracking-tighter">
            New Articles
          </h2>
          <div class="flex flex-wrap -m-8">
            <div class="w-full md:w-1/2 p-8">
              <div class="group cursor-pointer">
                <div class="mb-6 overflow-hidden rounded-lg">
                  <Image
                    class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                    src="/img/monuments/Podgaric/podgaric.jpg"
                    alt="text"
                    width={400}
                    height={400}
                  />
                </div>
                <p class="mb-6 text-gray-500 font-medium tracking-tight">
                  <span class="mr-4 text-indigo-500 font-semibold">
                    Insights
                  </span>
                  <span>26. July 2023.</span>
                </p>
                <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">
                  Monument to the Revolution of the people of Moslavina
                </h3>
                <p class="text-xl">
                  The monument is about 10m tall and 20m wide. It is dedicated
                  to the people of Moslavina during World War II.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 p-8">
              <div class="group cursor-pointer">
                <div class="mb-6 overflow-hidden rounded-lg">
                  <Image
                    class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                    src="/img/monuments/Kosmaj/kosmaj.png"
                    alt="text"
                    width={400}
                    height={400}
                  />
                </div>
                <p class="mb-6 text-gray-500 font-medium tracking-tight">
                  <span class="mr-4 text-indigo-500 font-semibold">
                    Insights
                  </span>
                  <span>16. June 2023.</span>
                </p>
                <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">
                  Monument to the Fallen Soldiers of the Kosmaj Detachment
                </h3>
                <p class="text-xl">
                  Monument to Kosmaj partisan division from WWII on top of
                  Kosmaj mountain, near Belgrade, Serbia.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 p-8">
              <div class="group cursor-pointer">
                <div class="mb-6 overflow-hidden rounded-lg">
                  <Image
                    class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                    src="/img/monuments/Tjentiste/Tjentiste.png"
                    alt="text"
                    width={400}
                    height={400}
                  />
                </div>
                <p class="mb-6 text-gray-500 font-medium tracking-tight">
                  <span class="mr-4 text-indigo-500 font-semibold">
                    Insights
                  </span>
                  <span>26. July 2023.</span>
                </p>
                <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">
                  The Battle of Sutjeska Memorial Monument Complex
                </h3>
                <p class="text-xl">
                  This spomenik at Tjentište commemorates the fighters and
                  fallen soldiers of the Battle of the Sutjeska, which took
                  place from May 15th to June 16th, 1943.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-8">
              <div class="group cursor-pointer">
                <div class="mb-6 overflow-hidden rounded-lg">
                  <Image
                    class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                    src="/img/monuments/Ilirska Bistrica/ilirskaBistrica.png"
                    alt="text"
                    width={400}
                    height={400}
                  />
                </div>
                <p class="mb-6 text-gray-500 font-medium tracking-tight">
                  <span class="mr-4 text-indigo-500 font-semibold">
                    Insights
                  </span>
                  <span>16. June 2023.</span>
                </p>
                <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">
                  Ilirska Bistrica
                </h3>
                <p class="text-xl">
                  In the village of Ilirska Bistrica, in the Green Karst region
                  of Slovenia, there is a spomenik complex a dedicated to the
                  fighters of the 4th Yugoslavian Army who liberated this area
                  during WWII. The remains of 284 of these soldiers who died
                  during this fight are interred in a mass tomb beneath the
                  monument. In addition, this monument also honors the Partisan
                  Prekomorski brigades who battled and fought in foreign lands.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 p-8">
              <div class="group cursor-pointer">
                <div class="mb-6 overflow-hidden rounded-lg">
                  <Image
                    class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                    src="/img/monuments/Sisak/sisak.png"
                    alt="text"
                    width={400}
                    height={400}
                  />
                </div>
                <p class="mb-6 text-gray-500 font-medium tracking-tight">
                  <span class="mr-4 text-indigo-500 font-semibold">
                    Insights
                  </span>
                  <span>26. July 2023.</span>
                </p>
                <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">
                  Monument to the Detachment in Brezovica Forest
                </h3>
                <p class="text-xl">
                  This spomenik at Sisak commemorates the creation of the first
                  politically organized fighting brigade who resisted and fought
                  against Axis invasion of occupied lands of Croatia.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-8">
              <div class="group cursor-pointer">
                <div class="mb-6 overflow-hidden rounded-lg">
                  <Image
                    class="w-full rounded-lg transform hover:scale-105 transition duration-500"
                    src="/img/monuments/Lepoglava/lepoglava.jpg"
                    alt="text"
                    width={400}
                    height={400}
                  />
                </div>
                <p class="mb-6 text-gray-500 font-medium tracking-tight">
                  <span class="mr-4 text-indigo-500 font-semibold">
                    Insights
                  </span>
                  <span>16. June 2023.</span>
                </p>
                <h3 class="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline">
                  Lepoglava Memorial Graveyard (Spomen groblje Lepoglava)
                </h3>
                <p class="text-xl">
                  The Lepoglava Memorial Cemetery is a site in which
                  commemorates the victims who died at the towns prison camp, as
                  well as the many thousands of people who were executed at this
                  site of the memorial during WWII.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

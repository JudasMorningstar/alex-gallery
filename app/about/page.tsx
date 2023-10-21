import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function About() {
  return (
    <>
      <div className=" bg-black">
        <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <div>
                <div
                  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>

                <div>
                  <Image
                    src="https://res.cloudinary.com/ddsnqfovk/image/upload/v1690959857/alex/DSC_5696_uhgjcx.jpg"
                    alt="image"
                    loading="lazy"
                    width={560}
                    height={320}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl  font-bold md:text-4xl">
                <span className="text-indigo-600">Through My Lens: </span>
                Celebrating Diversity in Wildlife, Landscape, Sports, and Bird
                Photography
              </h2>
              <p className="mt-6 text-gray-100">
                &quot;Through My Lens&quot; offers a captivating firsthand
                account of my life as a versatile photographer, celebrating
                diversity in wildlife, landscape, sports, and bird photography.
                This narrative delves into my passion, challenges, and
                extraordinary experiences across different photography genres.
              </p>
              <p className="mt-4 text-gray-100">
                {" "}
                From capturing the intricate beauty of wildlife to freezing
                breathtaking landscapes and dynamic sports moments, I aim to
                inspire others to cherish our planet&apos;s multifaceted beauty
                and advocate for its conservation. Through my lens, I celebrate
                the richness of diversity and seek to bridge cultures, promoting
                unity and understanding among all who view my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

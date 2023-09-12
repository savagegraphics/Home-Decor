import React from 'react'

type Props = {}

const FiveX = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Welcome to Our Gallery</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          Explore a world of stunning artworks and immerse yourself in their stories, from renowned classics to contemporary masterpieces.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Galaxies Orion"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Galaxies Orion
          </p>
          <p className="text-gray-700">
            Experience the mesmerizing beauty of the Orion Nebula, a celestial masterpiece that continues to inspire astronomers and stargazers alike.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Tunguska event"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Tunguska event
          </p>
          <p className="text-gray-700">
            Delve into the mysterious Tunguska event, a natural phenomenon that left a lasting mark on Earth&apos;s history and scientific exploration.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Yolo ipsum dolor"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Yolo ipsum dolor
          </p>
          <p className="text-gray-700">
            Explore the unique world of Yolo ipsum dolor, a place where art and imagination collide in a breathtaking display of creativity.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Curabitur mattis"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Curabitur mattis
          </p>
          <p className="text-gray-700">
            Embark on a journey through Curabitur mattis, where art and nature intertwine to create a world of wonder and exploration.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Leverage agile"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Leverage agile
          </p>
          <p className="text-gray-700">
            Dive into the world of Leverage agile, where adaptability and innovation are celebrated in every brushstroke and pixel.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Organically grow"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Organically grow
          </p>
          <p className="text-gray-700">
            Experience the beauty of Organically grow, a testament to nature&apos;s ability to flourish in the most unexpected places.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Explore More
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FiveX;

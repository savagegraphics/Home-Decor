import React from 'react';

type Props = {};

const Two = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Discover our unique collection
              <br className="hidden md:block" />
              of handpicked treasures
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore our curated selection of treasures from around the world. Each item is carefully chosen to bring beauty and uniqueness to your life.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="bg-white border-l-4 shadow-sm border-teal-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Exquisite Decor
                </h6>
                <p className="text-sm text-gray-900">
                  Elevate your living spaces with our exquisite decor pieces that add a touch of elegance and charm to every room.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white border-l-4 shadow-sm border-teal-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Unique Collectibles
                </h6>
                <p className="text-sm text-gray-900">
                  Explore our collection of unique collectibles that tell stories from different corners of the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Two;

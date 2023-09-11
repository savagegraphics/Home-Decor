import React from 'react'

type Props = {}

const FourImagesSection = (props: Props) => {
        return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold lg:whitespace-nowrap leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Discover Our Stunning Collection
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Explore our handpicked selection of exquisite home decor pieces that elevate your living spaces. 
              </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
              <img
                className="object-cover w-full h-56 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-56 rounded shadow-lg"
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-56 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
              <img
                className="object-cover w-full h-56 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="flex items-center sm:justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Sign up
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        );
      };

export default FourImagesSection
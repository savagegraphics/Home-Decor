import React from 'react'

type Props = {}

const Feature = (props: Props) => {
        return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Discover Beautiful Spaces
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Dive into a world of inspiration and creativity. Explore stunning spaces and curated designs for every room in your home. Let your imagination flourish as you embark on a journey to transform your living spaces.
              </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
              <div className="flex flex-col justify-center">
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
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
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Discover Room Inspirations
                    </h6>
                    <p className="text-sm text-gray-900">
                    Our room inspirations provide a canvas for your decorating dreams. Explore curated designs for every room in your home, from living rooms to bedrooms. Let your imagination run wild as you visualize your dream space.
                    </p>
                    <hr className="w-full my-6 border-gray-300" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
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
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Embrace Seasonal Collections
                    </h6>
                    <p className="text-sm text-gray-900">
                    Change with the seasons and embrace our carefully crafted seasonal collections. From the cozy warmth of winter to the freshness of spring, our decor pieces evolve with your home, adding that perfect touch of seasonal charm.                    </p>
                    <hr className="w-full my-6 border-gray-300" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
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
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Step Inside Virtual Rooms
                    </h6>
                    <p className="text-sm text-gray-900">
                    Take a step beyond imagination with our virtual room tours. Walk through beautifully decorated spaces and see how our decor items come to life in real settings. Explore, get inspired, and bring those ideas into your own home.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <img
                  className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-full h-48 rounded shadow-lg"
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-full h-48 rounded shadow-lg"
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      };
export default Feature
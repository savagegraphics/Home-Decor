import React from 'react'

type Props = {}

const RoomInspiration = (props: Props) => {
        return (
                  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                         Discover Beautiful Spaces
                       </h2>
                       <p className="text-base text-gray-700 md:text-lg">
                         Dive into a world of inspiration and creativity. Explore stunning spaces and curated designs for every room in your home. Let your imagination flourish as you embark on a journey to transform your living spaces.
                       </p>
                    </div>
                    <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                      <div className="grid grid-cols-2 gap-5">
                        <img
                          className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                          src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt=""
                        />
                        <img
                          className="object-cover w-full h-48 rounded shadow-lg"
                          src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt=""
                        />
                        <img
                          className="object-cover w-full h-48 rounded shadow-lg"
                          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="pb-4 mb-4 border-b">
                          <h6 className="mb-2 font-semibold leading-5">
                          Discover Room Inspirations
                          </h6>
                          <p className="text-sm text-gray-900">
                          Our room inspirations provide a canvas for your decorating dreams. Explore curated designs for every room in your home, from living rooms to bedrooms. Let your imagination run wild as you visualize your dream space.
                      </p>
                        </div>
                        <div className="pb-4 mb-4 border-b">
                          <h6 className="mb-2 font-semibold leading-5">
                          Embrace Seasonal Collections
                          </h6>
                          <p className="text-sm text-gray-900">
                          Change with the seasons and embrace our carefully crafted seasonal collections. From the cozy warmth of winter to the freshness of spring, our decor pieces evolve with your home, adding that perfect touch of seasonal charm.
                          </p>
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
                  </div>
                );
              };

export default RoomInspiration 
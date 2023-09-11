import React from 'react'

type Props = {}

const WHYUS = (props: Props) => {
  return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className='ml-10 lg:ml-20 mt-6'>
                <img
                  className="object-cover w-[25rem] h-56 rounded-2xl shadow-lg sm:h-96"
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="max-w-xl mb-4">
                  <h2 className="max-w-lg mb-2 font-sans text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
                  Why Choose Us?
                  </h2>
                </div>
                <div className="grid text-zinc-400 text-xs font-normal leading-relaxed sm:space-y-0">
                    <p className='text-zinc-400 text-base font-normal leading-relaxed'>
                    Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis tempor consequat turpis. Aenean curae elementum vestibulum dapibus vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.
  </p>
  <p className='text-zinc-400 text-base font-normal leading-relaxed'> 
  Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.
</p>
                </div>
                <div className="mt-4 text-zinc-400 text-base text-md font-normal leading-relaxed">
                    <li>SUSTAINABLY SOURCED</li>
                    <li>EASY TO RECYCLE</li>
                    <li>IMPROVED HOME RESALE VALUE</li>
                    <li>A SMART WAY TO LEED CERTIFICATION</li>
</div>
<div className="flex flex-col justify-start items-start md:flex-row mt-8">
  <a
    href="/"
    className="inline-flex items-center justify-center border border-white whitespace-nowrap w-44 h-12 px-6 mb-3 font-medium tracking-wide text-gray-950 transition duration-200 rounded-xl  shadow-md bg-white hover:bg-gray-600 focus:shadow-outline focus:outline-none"
  >
    <span className="mr-3">Learn More</span>
  </a>
</div>
              </div>
            </div>
          </div>
        );
      };

export default WHYUS
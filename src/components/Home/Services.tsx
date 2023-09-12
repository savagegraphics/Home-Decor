import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
	<div className="container mx-auto space-y-12 my-16">
    <h1 className='text-4xl font-bold text-white text-center'>Products</h1>
    <div className="flex flex-col p-4 bg-gray-900 overflow-hidden rounded-md shadow-sm lg:flex-row">
    <img src="https://source.unsplash.com/640x480/?3" alt="" className=" h-80 rounded-2xl aspect-video" />
  <div className="flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-gray-900">
    <h3 className="text-3xl font-semibold leading-10 text-white">Measurement Service</h3>
    <p className="my-6 text-gray-400">Our sales support team will come & measure your property in order to ensure accuracy in design and help you calculate how many tiles you need. Please call our toll free number 800 122 22 20 to arrange a visit, or visit one of our Showrooms.</p>
    <div className="flex flex-col justify-start items-start md:flex-row">
  <a
    href="/"
    className="inline-flex items-center justify-center border border-white whitespace-nowrap w-44 h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-gray-600 focus:shadow-outline focus:outline-none"
  >
    <span className="mr-3">Learn More</span>
  </a>
</div>
  </div>
</div>
		<div className="flex flex-col overflow-hidden p-4 rounded-md shadow-sm bg-gray-900 lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 rounded-2xl aspect-video" />
            <div className="flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-gray-900">
    <h3 className="text-3xl font-semibold leading-10 text-white">Product Advice</h3>
    <p className="my-6 text-gray-400">Consult our professionals by calling our toll free number 800 122 22 20 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.</p>
    <div className="flex flex-col justify-start items-start md:flex-row">
  <a
    href="/"
    className="inline-flex items-center justify-center border border-white whitespace-nowrap w-44 h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-gray-600 focus:shadow-outline focus:outline-none"
  >
    <span className="mr-3">Learn More</span>
  </a>
</div>
  </div>
		</div>
        <div className="flex flex-col p-4 bg-gray-900 overflow-hidden rounded-md shadow-sm lg:flex-row">
    <img src="https://source.unsplash.com/640x480/?3" alt="" className=" h-80 rounded-2xl aspect-video" />
    <div className="flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-gray-900">
    <h3 className="text-3xl font-semibold leading-10 text-white">Interior Design</h3>
    <p className="my-6 text-gray-400">Benefit from our free interior design service. Our fully qualified interior designers will provide CAD visuals to help you visualise your selected tiles before you buy.</p>
    <div className="flex flex-col justify-start items-start md:flex-row">
  <a
    href="/"
    className="inline-flex items-center justify-center border border-white whitespace-nowrap w-44 h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-gray-600 focus:shadow-outline focus:outline-none"
  >
    <span className="mr-3">Learn More</span>
  </a>
</div>
  </div>
</div>


	</div>
</section>
  )
}

export default Services
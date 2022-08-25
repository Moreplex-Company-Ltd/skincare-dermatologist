import React from 'react'

const SectionTwo = () => {
  return (
    <React.Fragment>
        <section className=''>
            <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="p-8 bg-blue-600 md:p-12 lg:px-16 lg:py-24">
                    <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Start Your Beauty Discovery journey. Let’s walk it with you
                    </h2>

                    {/* <p className="hidden sm:block sm:mt-4 text-white/90">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
                        et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                        tincidunt duis.
                    </p> */}

                    <div className="mt-4 md:mt-8">
                        <a
                        href="/"
                        className="inline-block px-12 py-3 text-sm font-medium text-blue-500 transition bg-white border border-white rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                        Get Started Today
                        </a>
                    </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                    <img
                    alt="#"
                    src="https://res.cloudinary.com/jondexter/image/upload/v1661396325/smartDerm/image-1_nb1rx7.jpg"
                    className="object-cover w-full h-40 sm:h-56 md:h-full"
                    />

                    <img
                    alt="#"
                    src="/assets/images/skin/image-2.jpg"
                    className="object-cover w-full h-40 sm:h-56 md:h-full"
                    />
                </div>
                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default SectionTwo
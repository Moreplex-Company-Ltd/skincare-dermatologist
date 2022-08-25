import React from 'react'

const SingleComponent = ({position, number, title, description}) => {
    return (
        <div className="max-w-screen-xl px-4 py-0 mx-auto sm:px-6 lg:px-8 mt-10">
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                <div
                    className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full ${position === 'left' ? 'lg:order-last' : 'lg:order-first'}`}
                >
                    <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src="https://res.cloudinary.com/jondexter/image/upload/v1661396326/smartDerm/image-4_wyazsd.jpg"
                    alt="Man using a computer"
                    />
                </div>

                <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl text-green-900">{number}</h2>

                    <h3 className='text-4xl font-bold mt-5'>{title}</h3>

                    <p className="mt-4 text-gray-600">
                    {description}
                    </p>
                </div>
                </div>
            </div>
    )
}

const SectionThree = () => {
  return (
        <section className='container mx-auto py-10'>
            <div className='flex justify-center py-10'>
                <h1 className='text-5xl font-bold mt-5 text-blue-900 mb-5'>How it Works</h1>
            </div>

            <SingleComponent 
                position='left' 
                number="01"
                title="Create an Account"
                description=""
            />
            <SingleComponent 
                position='right' 
                number="02"
                title="Tell us about your Skin and life style"
                description=""
            />
            <SingleComponent 
                position='left' 
                number="03"
                title="Get your Personalized SkinCare Products"
                description=""
            />

        </section>
  )
}

export default SectionThree
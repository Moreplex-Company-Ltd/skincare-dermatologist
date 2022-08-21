import React from 'react'

const Hero = () => {
  return (
    <React.Fragment>
    <section className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
        <div className="container mx-auto sm:px-0 px-5">
            <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:px-0 lg:w-5/12 ">
                <div className="hero-content ">
                <h1
                    className="mb-8 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px] text-center sm:text-left"
                >
                    <span className='font-light'>Moreplex's </span>
                    <br />
                    <span className="text-primary_gold font-extrabold">AI SkinCare Advisor</span>
                </h1>
                <p className="mb-12 max-w-[480px] text-base text-body-color text-center sm:text-left">
                    Personalized and clinically effective skincare solutions for your skin based on your life, habit and environment
                </p>
                <div className='flex justify-center sm:justify-start'>
                <button className="inline-flex items-center rounded-sm bg-green-900 py-2.5 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10 justify-center">
                        Analyse Your Skin
                        <svg
                        class="w-5 h-5 ml-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </button>
                </div>
                <div className="clients pt-16">
                    <h6
                    className="mb-2 flex items-center text-xs font-normal text-body-color"
                    >
                    
                   
                    </h6>
                    <div className="flex justify-center items-center ">
                    <div className=" w-full  py-2 flex items-center">
                        <p className='font-light'>Effective</p>
                        <img src="assets/images/icons/target.png" className='ml-2 h-6 w-6' alt="effective" />
                    </div>
                    <div className=" w-full py-3 flex ">
                        <p className='font-light'>Natural</p>
                        <img src="assets/images/icons/planet-earth.png" className='ml-2 h-6 w-6' alt="natural"
                        />
                    </div>
                    <div className=" w-full py-3 flex items-center">
                        <p className='font-light'>Data Powered</p>
                        <img src="assets/images/icons/dashboard.png" className='ml-2 h-6 w-6' alt="ai powered" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12 "></div>
            <div className="w-full  lg:w-6/12 ">
                <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                    src="assets/images/skin/image-3.jpeg"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                    />
                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}

export default Hero
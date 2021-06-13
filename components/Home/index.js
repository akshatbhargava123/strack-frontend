function Home() {
    return (
        <div>
            <section className="w-full px-6 pb-12 antialiased bg-white">
                <div className="mx-auto max-w-7xl">

                    <nav className="relative z-50 h-24 select-none">
                        <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                            <div className="flex items-center justify-start w-1/4 h-full pr-4">
                                <a href="#_" className="inline-block py-4 md:py-0">
                                    <span className="p-1 text-xl font-black leading-none text-gray-900"><span>Strack</span><span className="text-red-500">.</span></span>
                                </a>
                            </div>
                            <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                                <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                                    <a href="#_" className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span className="text-red-500">.</span></a>
                                    <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                        <a href="#_" className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-red-500 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                                        <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-500 lg:mx-3 md:text-center">Features</a>
                                        <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-500 lg:mx-3 md:text-center">Blog</a>
                                        <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-500 lg:mx-3 md:text-center">Contact</a>
                                        <a href="#_" className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                                            <svg className="inline w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </a>
                                    </div>
                                    <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                        <a href="#" className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">Sign In</a>
                                        <a href="#_" className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-red-500 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-red-400 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-red-500">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                <svg hidden className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        </div>
                    </nav>

                    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                            <span className="inline md:block">Deploy your next Blockchain Node</span>
                            {/* <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-400 md:inline-block">Within minutes</span> */}
                            <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-400 md:inline-block">Without the knowhow</span>
                            {/* <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-400 md:inline-block">Without hassle</span> */}
                        </h1>
                        <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
                            Simplifying
                            <span className="bg-gray-200 text-gray-600 rounded-lg ml-1 px-2 py-px">creation</span>
                            <span className="bg-gray-200 text-gray-600 rounded-lg ml-1 px-2 py-px">monitoring</span>
                            <span className="bg-gray-200 text-gray-600 rounded-lg ml-1 px-2 py-px">security</span> and <span className="bg-gray-200 text-gray-600 rounded-lg ml-1 px-2 py-px">management</span> for your blockchain business needs</div>
                        <div className="flex flex-col items-center mt-12 text-center">
                            <span className="relative inline-flex w-full md:w-auto">
                                <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-red-500 border border-transparent rounded-full md:w-auto hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Deploy now
                                </a>
                                <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">{'free trial' || 'only $15/hr'}</span>
                            </span>
                            <a href="#" className="mt-3 text-sm text-red-500">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md">
                        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-3xl font-heading">Jam-packed with all the features you need to succeed!</h2>
                        <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It's never been easier to manage a blockchain node of your own. Our features will help you with the following:</p>
                        <ul>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                <span className="font-medium text-gray-500">Deploying the infastructure in minutes</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                <span className="font-medium text-gray-500">Out of the Box Monitoring of your nodes</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                <span className="font-medium text-gray-500">Easily configurable to the root</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                <span className="font-medium text-gray-500">Faster and Secure connections</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                <span className="font-medium text-gray-500">No prior tech knowledge required</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image" /></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;
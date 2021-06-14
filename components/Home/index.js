import { useState } from 'react';
import Typewriter from 'typewriter-effect';


function Logo({ className }) {
    return (
        <span className={`p-1 text-xl font-black leading-none text-gray-900 ${className || ''}`}><span>Strack</span><span className="text-red-500">.</span></span>
    )
}

function ProductHeading() {
    const texts = ['Within minutes', 'Without the hassle', 'Without the knowhow'];
    
    return (
        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline mb-2 md:block">Deploy your next Blockchain Node</span>
            <Typewriter
                className=""
                options={{
                    skipAddStyles: true,
                    wrapperClassName: 'relative text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-400 md:inline-block',
                    cursorClassName: 'hidden',
                    strings: texts,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 20,
                }}
            />
        </h1>
    )
}

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div>
            <section className="w-full px-6 pb-12 antialiased bg-white" onClick={() => setMenuOpen(false)}>
                <div className="mx-auto max-w-7xl">

                    <nav className="relative z-50 h-24 select-none">
                        <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                            <div className="flex items-center justify-start w-1/4 h-full pr-4">
                                <a href="#_" className="inline-block py-4 md:py-0">
                                    <Logo />
                                </a>
                            </div>
                            <div className={`top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex ${menuOpen ? 'flex fixed' : 'hidden'}`}>
                                <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                                    <a href="#_" className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">Strack<span className="text-red-500">.</span></a>
                                    <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                        <a href="#" className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-red-500 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                                        <a href="#features" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-500 lg:mx-3 md:text-center">Features</a>
                                        <a href="#providers" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-500 lg:mx-3 md:text-center">Providers</a>
                                        <a href="#chains" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-500 lg:mx-3 md:text-center">Supported Chains</a>
                                        {/* <a hidden href="#_" className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                                            <svg className="inline w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </a> */}
                                    </div>
                                    <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                        <a className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">Sign In</a>
                                        <a href="#_" className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-red-500 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-red-400 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-red-500">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                                {!menuOpen ? (
                                    <svg
                                        onClick={(ev) => {
                                            setMenuOpen(true);
                                            ev.stopPropagation();
                                        }}
                                        className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                ) : (
                                    <svg onClick={() => setMenuOpen(false)} className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                )}
                            </div>
                        </div>
                    </nav>

                    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                        <ProductHeading />
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
                            <a href="#features" className="mt-3 text-sm text-red-500">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50" id="features">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md">
                        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-3xl font-heading">Jam-packed with all the features you need to succeed!</h2>
                        <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It's never been easier to manage a blockchain node of your own. Our features will help you with the following:</p>
                        <ul>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                <span className="font-medium text-gray-500">Deploying the infastructure in minutes</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                <span className="font-medium text-gray-500">Out of the Box Monitoring of your nodes</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                <span className="font-medium text-gray-500">Easily configurable to the root</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                <span className="font-medium text-gray-500">Faster and Secure connections</span>
                            </li>
                            <li className="flex items-center py-2 space-x-4 xl:py-3">
                                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                <span className="font-medium text-gray-500">No prior tech knowledge required</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image" /></div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
                    <p className="mt-2 text-lg text-center text-gray-600">Your one stop solution to all your blockchain mining/validating business needs</p>
                    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                        <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Backed by Top Cloud Providers</h4>
                            <p className="text-base text-center text-gray-500">Get SLAs uptime guarantees from top providers, choose the one you trust</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
                            <p className="text-base text-center text-gray-500">Get proper notifications during outage or any other issues with your node</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Customisable</h4>
                            <p className="text-base text-center text-gray-500">5-click setup if you're a beginner, fully configurable if you'd prefer that anytime</p>
                        </div>

                        {/* <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Developer Tools</h4>
                            <p className="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Easy payments</h4>
                            <p className="text-base text-center text-gray-500">We only charge you for </p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-red-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
                            <p className="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="leading-7 text-gray-900 bg-white flex" id="providers">
                <div className="container max-w-6xl mx-auto lg:py-24 px-3 border-t border-gray-200">
                    <h2 className="text-4xl font-bold tracking-tight text-center">Backed by top cloud providers</h2>
                    <p className="mt-2 text-lg text-center text-gray-600">We support one-click deployment to any of these providers</p>
                    <div className="flex justify-center"><img className="sm:w-1/2" src="https://miro.medium.com/max/3222/1*go7sTFOGN2fJGgYrI3E-FA.png" alt="" /></div>
                </div>
            </section>

            <section className="py-20 bg-gray-50" id="chains">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-16 md:px-32 lg:px-10">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full px-3 lg:w-1/2">
                            <div className="w-full lg:max-w-md">
                            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-3xl font-heading">Supports multiple blockchains</h2>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">and many more to come if you show us some support</p>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-12 lg:w-1/2 lg:mb-0 flex ">
                            <img className="mx-auto" width="100px" src="https://originem.it/wp-content/uploads/2019/01/ethlogo.png" alt="feature image" />
                            <img className="mx-auto" width="100px" src="https://i2.wp.com/dexplain.com/wp-content/uploads/2020/08/image-15.png?resize=200%2C200&ssl=1" alt="feature image" />
                            <img className="mx-auto" width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt="feature image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
                    <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                        <div className="box-border flex-1 text-center border-solid sm:text-left">
                            <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                                Leave the hard stuff on us
                            </h2>
                            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                                Start your first blockchain node now
                            </p>
                        </div>
                        <a href="#_" className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-red-500 border border-red-500 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-red-600 hover:border-red-600 hover:text-white focus-within:bg-red-600 focus-within:border-red-600 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        {/* <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                About
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Blog
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Team
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Terms
                            </a>
                        </div> */}
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <span className="mt-8 text-base leading-6 text-center text-gray-400 flex justify-center flex-wrap">
                        Built with <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-px mx-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>by team <Logo className="relative -top-px" /> at SyntropyStack hackathon
                    </span>
                </div>
            </section>

        </div>
    )
}

export default Home;

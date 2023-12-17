import "./pricing.css";
export default function Component() {
  return (
    <>
    <section className="pricing-par text-gray-400 body-font overflow-hidden h-screen">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
        Pricing
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            START
          </h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
            Free
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			  ai background music
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			length upto 1 minute and limited access to tools
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			copyright and royalty free music
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
			Checkout for payment
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-auto"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            PRO
          </h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>$8</span>
            <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			ai background music
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			priority access to newer models
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			  length upto 10 minutes
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>

			copyright and royalty free music
          </p>
          <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
		  Checkout for payment
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-auto"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            BUSINESS
          </h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>$30</span>
            <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			  ai background music with advanced tools
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			fine-grained control over the generated music
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			priority access to newer models
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			  length upto 10 minutes
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
			copyright and royalty free music
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
			Checkout for payment
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-auto"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}




/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QgMyhxih08P
 */

export default function Component() {
  return (
    <section className="min-h-screen w-full py-12 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-gray-100 shadow-lg rounded-lg justify-between border border-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-900">Basic</h3>
              <div className="mt-4 text-center text-gray-800">
                <span className="text-4xl font-bold">$29</span>/ month
              </div>
              <ul className="mt-4 space-y-2 text-gray-900">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					ai generated music
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					length upto 30 seconds
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					copyright-free
                </li>
				<li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					royalty-free
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-black">Get Started</button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-gray-100 shadow-lg rounded-lg justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-900">Pro</h3>
              <div className="mt-4 text-center text-gray-800">
                <span className="text-4xl font-bold">$59</span>/ month
              </div>
              <ul className="mt-4 space-y-2 text-gray-900">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					ai generated music
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					length upto 10 minutes
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					copyright-free
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					royalty-free
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">Get Started</button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-gray-100 shadow-lg rounded-lg justify-between border border-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-900">Enterprise</h3>
              <div className="mt-4 text-center text-gray-800">
                <span className="text-4xl font-bold">$99</span>/ month
              </div>
              <ul className="mt-4 space-y-2 text-gray-900">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					ai generated vibe based music
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					length upto 10 minutes
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					copyright free
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
					royalty free
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-black">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


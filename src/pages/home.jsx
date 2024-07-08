import React from 'react'
import Toolsection from '../components/toolsection'

function home() {
  return (
    <div>
      <div>
        <section className="text-center bg-white">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-12">
            <div className="flex flex-col space-y-4 space-y-reverse">
              <h1 className="order-last text-lg text-gray-700">Free Tools For Everyone.</h1>
              <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">HandyMan</h2>
            </div>
            <p className="max-w-xl mx-auto mt-6 text-gray-700 text-pretty text-base/relaxed ">HandyMan is a collection of free Tools and components that can be used in your next project. With a range of tools, you can build your next project faster and much more.</p>
            <div className="mt-4">
              <div className="max-w-lg mx-auto text-center not-prose">
                <div data-ea-publisher="hyperuidev" data-ea-type="image" data-ea-style="stickybox" className="bordered horizontal [&amp;_.ea-callout]:!mb-0 [&amp;_.ea-content]:!mx-0 [&amp;_.ea-content]:!mt-0 [&amp;_.ea-stickybox-hide]:hidden">
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <div className='flex justify-center w-full'>

        <div className="relative w-1/2 lg:w-1/3">
          <label htmlFor="Search" className="sr-only"> Search </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-gray-300 py-2.5 pe-10 shadow-sm sm:text-sm px-3 border-2"
          />

          <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className='m-5 lg:mx-28 lg:my-10'>
        <Toolsection />
      </div>
    </div>
  )
}

export default home
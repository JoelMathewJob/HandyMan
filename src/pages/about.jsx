import React from 'react'

function about() {
  return (
    <div style={{height:'65vh'}}>
        <section className="text-center bg-white ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-12">
            <div className="flex flex-col space-y-4 space-y-reverse">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-2xl">About</h2>
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
  )
}

export default about
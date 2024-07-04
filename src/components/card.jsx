import React from 'react'
import {Link} from 'react-router-dom'

function card({path, name, desc}) {
  return (
    <Link to={path}>
            <div className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-md before:border-2 before:border-dashed before:border-gray-900">
              <div className="h-full rounded-md border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">⛅</span>
                  </div>
                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">{name}</h2>
                  <p className="mt-1 text-sm text-gray-700">{desc}</p>
                </div>
              </div>
            </div>
          </Link>
  )
}

export default card
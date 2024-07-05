import React from 'react'
import {Link} from 'react-router-dom'

function card({path, name, desc, icon}) {
  return (
    <Link to={path}>
            <div className="relative block h-full bg-white group before:absolute before:inset-0 before:rounded-md before:border-2 before:border-dashed before:border-gray-900">
              <div className="h-full transition bg-white border-2 border-gray-900 rounded-md group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">{icon}</span>
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
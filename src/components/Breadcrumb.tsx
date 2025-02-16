import React from 'react';
export default function Breadcrumb() {
    return (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
          <button className="text-gray-700 hover:text-blue-600">Home</button>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <button className="text-gray-700 hover:text-blue-600">Products</button>

            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Current Product</span>
            </div>
          </li>
        </ol>
      </nav>
    )
  }
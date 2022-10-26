import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../../services'

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-featured-card shadow-sp1 backdrop-blur-sm rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-2xl text-gray-200 mb-8 font-semibold border-b border-gray-400 pb-4'>
        دسته بندی ها
      </h3>
      <div className='flex flex-wrap'>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <p className='cursor-pointer text-sm  bg-fuchsia-600 m-0.5 p-1 sm:m-1 sm:p-2 rounded text-white'>
              {category.name}
            </p>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Categories

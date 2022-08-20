import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-featured-card shadow-sp1 backdrop-blur-sm rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl text-gray-200 mb-8 font-semibold border-b border-gray-400 pb-4'>
      دسته بندی ها
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 text-gray-200'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories

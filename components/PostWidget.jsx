import React, { useState, useEffect } from 'react'
import moment from 'jalali-moment'
import Link from 'next/link'
import Image from 'next/image'


import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])



  return (
    <div className='bg-featured-card shadow-sp1 backdrop-blur-sm  rounded-lg p-8 mb-8'>
      <h3 className='text-gray-200 text-2xl mb-8 font-semibold border-b border-gray-400  pb-4'>
        {slug ? 'پست های مرتبط' : 'پست های اخیر'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className='w-16 flex-none'>
            <Image
              alt={post.title}
              height={60}
              width={60}
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-400 font-xs'>
              {moment(post.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
            </p>
            <div className='text-md text-gray-200 '>
            <Link href={`/post/${post.slug}`} key={post.title}  >
            {post.title}
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
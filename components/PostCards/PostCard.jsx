import React from 'react'
import moment from 'jalali-moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => (
    <div className="bg-post-card shadow-sp1 backdrop-blur-sm rounded-lg p-0 lg:p8 pb-6 sm:pb-12 mb-4 sm:mb-8">
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
            <div className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg">
                <Image layout='fill' src={post.featuredImage.url} alt={post.title} />
            </div>
        </div>
        <h1 className='transition duration-700 hover:text-pink-600  text-center mb-4 sm:mb-6 cursor-pointer  text-2xl sm:text-4xl font-semibold'>
            <Link href={`/post/${post.slug}`}>
                {post.title}
            </Link>
        </h1>
        <div className='flex text-center items-center justify-center mb-3 sm:mb-6 w-full'>
            <div className='flex items-center justify-center w-auto mr-4 sm:mr-8'>
                <Image
                    alt={post.author.name}
                    height={30}
                    width={30}
                    className="align-middle rounded-full"
                    quality={45}
                    src={post.author.photo.url}
                />
                <p className='inline align-middle text-gray-700 mr-2 text-xl'>{post.author.name}</p>
            </div>
            <div className='inline font-medium text-gray-700 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3 ml-1 align-middle text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="align-middle text-xl">
                    {moment(post.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
                </span>
            </div>
        </div>
        <p className='text-center text-lg text-text-color font-normal px-4 lg:px-20 mb-4 sm:mb-8'>{post.excerpt}</p>
        <div className='text-center'>
            <Link href={`post/${post.slug}`}>
                <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                    ادامه مطلب
                </span>
            </Link>
        </div>
    </div>
)

export default PostCard

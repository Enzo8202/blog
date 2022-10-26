import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Header = () => {

    return (
        <div className='container mx-auto px-7 mb-6'>
            <div className='border-b  w-full  inline-block border-blue-400 py-4'>
                <div className='flex md:float-right'>
                    <div className='ml-2'>
                        <Image
                            src="/icons8-react-100.png"
                            width={60}
                            height={60}
                            alt='React Logo'
                        />
                    </div>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-3xl sm:text-4xl  text-white self-center'>
                            جامعه ری اکت
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header

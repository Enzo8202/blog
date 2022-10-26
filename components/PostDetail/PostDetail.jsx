import React from 'react';
import Image from 'next/image';
import moment from 'jalali-moment'

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-4 text-lg">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-sm font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };


  return (
    <div className="bg-post-card shadow-sp1 backdrop-blur-sm rounded-lg lg:p-8 pb-12 mb-8">
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <div className="object-top absolute object-cover h-full w-full rounded-t-lg">
          <Image
            layout="fill"
            src={post.featuredImage.url}
            alt={post.title}
          />
        </div>
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-4 w-full'>
          <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-3'>
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
          <div className='flex font-medium text-gray-700 mr-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="min-w-max text-xl mr-1">
              {moment(post.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
            </span>
          </div>
        </div>
        <h1 className='mb-4 text-3xl font-semibold'>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    imgUrl: string;
    alt: string;
    value: number | string;
    title: string;
    textStyles?: string;
    imgStyles?: string;  
    href?: string;
    isAuthor?: boolean;

}

const Metric = ({ imgUrl, alt, value, title, textStyles, imgStyles, href, isAuthor }: Props ) => {
    const metricContent = (
        <>
            <Image width={16} height={16} src={imgUrl} alt={alt} className={`rounded-full ${imgStyles} object-contain`} />
            <p className={`${textStyles} flex items-center gap-1`}>
              {value}
              <span className={`small-regular line-clamp-1 ${isAuthor ? 'max-sm:hidden' : ''}`}>
                {title}
              </span>
            </p>
        </>
    )
  return href ? (
    <Link href={href} className='flex-center gap-1' >
        {metricContent}
    </Link>
  ) : (
    <div className='flex-center gap-1'>
        {metricContent}
    </div>
  )
}

export default Metric
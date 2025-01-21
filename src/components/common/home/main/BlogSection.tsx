import React from 'react'

import { homeBlogs } from '@/app/data/sample_data';
import { HomeBlogCard } from '../../blog/HomeBlogCard';

export const BlogSection = () => {
  return (
    <>
      <div className="text-center mt-[200px] mb-[100px]">
        <h1 className="font-josefin text-[42px] text-[#151875]">
          Latest Blogs
        </h1>
      </div>

      <div className="flex items-center justify-center mb-[100px]">
        {homeBlogs.map((blog, index) => (
          <HomeBlogCard
            isActive={blog.isActive}
            name={blog.name}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            writerName={blog.writeName}
            key={index}
          />
        ))}
      </div>
    </>
  );
}



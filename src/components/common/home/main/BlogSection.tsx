import React from 'react'

import { homeBlogs } from '@/app/data/sample_data';
import { HomeBlogCard } from '../../blog/HomeBlogCard';

export const BlogSection = () => {
   return (
     <>
       <div className="text-center mt-24 mb-12">
         <h1 className="text-3xl md:text-4xl font-bold text-[#151875]">
           Latest Blogs
         </h1>
       </div>

       <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8 mb-12">
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



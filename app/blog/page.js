// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { blogPosts } from "@/utils/data/blog-posts";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  try {
    // Try to fetch from dev.to first
    if (personalData.devUsername) {
      const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
        next: { revalidate: 3600 }, // Revalidate every hour
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          return data;
        }
      }
    }
    
    // Fallback to local blog posts
    return blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.excerpt,
      cover_image: post.coverImage,
      url: `/blog/${post.slug}`,
      published_at: post.publishedAt,
      reading_time_minutes: parseInt(post.readingTime),
      tag_list: post.tags
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Return local blog posts as fallback
    return blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.excerpt,
      cover_image: post.coverImage,
      url: `/blog/${post.slug}`,
      published_at: post.publishedAt,
      reading_time_minutes: parseInt(post.readingTime),
      tag_list: post.tags
    }));
  }
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;
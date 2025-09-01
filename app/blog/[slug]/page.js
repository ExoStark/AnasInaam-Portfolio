// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { blogPosts } from "@/utils/data/blog-posts";
import { notFound } from "next/navigation";

async function getBlog(slug) {
  try {
    // Try to fetch from dev.to first
    if (personalData.devUsername) {
      const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`, {
        next: { revalidate: 3600 },
      });
      
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    }
    
    // Fallback to local blog posts
    const post = blogPosts.find(post => post.slug === slug);
    if (!post) {
      return null;
    }
    
    return {
      id: post.id,
      title: post.title,
      description: post.excerpt,
      body_html: post.content.replace(/\n/g, '<br>'),
      cover_image: post.coverImage,
      published_at: post.publishedAt,
      reading_time_minutes: parseInt(post.readingTime),
      tag_list: post.tags,
      url: `/blog/${post.slug}`
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
};

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  
  if (!blog) {
    notFound();
  }
 
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <span>{blog.published_at}</span>
            <span>•</span>
            <span>{blog.reading_time_minutes} min read</span>
          </div>
          
          {blog.tag_list && blog.tag_list.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tag_list.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Cover Image */}
        {blog.cover_image && (
          <div className="mb-8">
            <img 
              src={blog.cover_image} 
              alt={blog.title}
              className="w-full h-64 lg:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="blog-content-wrapper">
          <div 
            dangerouslySetInnerHTML={{ __html: blog.body_html }}
            className="blog-styled-content"
          />
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <a 
            href="/blog"
            className="inline-flex items-center text-[#16f2b3] hover:text-pink-500 transition-colors"
          >
            ← Back to all blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
import React from "react";

const BlogSection = () => {
  // Additional blog data
  const blogs = [
    {
      id: 1,
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "January 1, 2023",
      imageUrl: "https://via.placeholder.com/400x250", // Replace with actual image URL
      author: "John Doe",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
      date: "February 15, 2023",
      imageUrl: "https://via.placeholder.com/400x250", // Replace with actual image URL
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris blandit aliquet elit...",
      date: "March 10, 2023",
      imageUrl: "https://via.placeholder.com/400x250", // Replace with actual image URL
      author: "Alex Johnson",
    },
    // Add more blog objects as needed
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded shadow-md p-4">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
            <p className="text-sm mb-4">{blog.content}</p>
            <p className="text-xs text-gray-500">Author: {blog.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

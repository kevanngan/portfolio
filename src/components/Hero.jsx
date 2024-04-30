import React, { useState, useEffect } from 'react';

const Post = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://kevanngan.com/portfolio/wp-json/wp/v2/posts/19');
        if (response.ok) {
          const data = await response.json();
          setPostData(data);
        } else {
          console.error('Failed to fetch post data');
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      {postData ? (
        <div>
          <h1>{postData.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;

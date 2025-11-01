import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostAxios() {
  const [posts, setPosts] = useState<Post[]>([]);//define the type here

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts') 
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// POST request to create a new post
axios.post('https://jsonplaceholder.typicode.com/posts', {
title: 'new post',
body: 'this is a new post',
});
// DELETE request to delete a post with id 1
axios.delete('https://jsonplaceholder.typicode.com/posts/1');
// PUT request to update a post with id 1
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
title: 'updated title',
});
export default PostAxios;
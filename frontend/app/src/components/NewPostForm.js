import React, { useState } from 'react';
import axios from 'axios';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1/posts', { title, content })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPostForm;

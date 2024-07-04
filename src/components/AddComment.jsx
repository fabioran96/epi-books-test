import React, { useState } from 'react';

const AddComment = ({ asin, onNewComment }) => {
  const [commentData, setCommentData] = useState({
    comment: '',
    rate: 1
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCommentData({
      ...commentData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = {
      ...commentData,
      elementId: asin
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk4NDA3ODksImV4cCI6MTcyMTA1MDM4OX0.B4Ac2In37D7jG2-Qdv5MVa8OIekmjB-RbStLDhWn4qY'
          
        }
      });

      if (response.ok) {
        alert('Comment added!');
        onNewComment(); // Refresh the comments list
      } else {
        alert('Error adding comment');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          name="comment"
          value={commentData.comment}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <select
          id="rate"
          name="rate"
          value={commentData.rate}
          onChange={handleInputChange}
        >
          {[1, 2, 3, 4, 5].map(rate => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddComment;

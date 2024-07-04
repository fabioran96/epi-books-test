import React from 'react';

const SingleComment = ({ comment }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk4NDA3ODksImV4cCI6MTcyMTA1MDM4OX0.B4Ac2In37D7jG2-Qdv5MVa8OIekmjB-RbStLDhWn4qY'
        }
      });
      if (response.ok) {
        alert('Comment deleted!');
      }
    } catch (error) {
      console.log('Error deleting comment:', error);
    }
  };

  return (
    <div className="mb-2">
      <p>{comment.comment}</p>
      <small>Rating: {comment.rate}</small>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SingleComment;

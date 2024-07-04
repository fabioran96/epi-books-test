import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk4NDA3ODksImV4cCI6MTcyMTA1MDM4OX0.B4Ac2In37D7jG2-Qdv5MVa8OIekmjB-RbStLDhWn4qY'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {comments.length > 0 ? (
        <>
          <CommentsList comments={comments} />
          <AddComment asin={asin} onNewComment={() => fetchComments()} />
        </>
      ) : (
        <div>No comments yet</div>
      )}
    </div>
  );
};

export default CommentArea;

import SingleComment from './SingleComment';

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;

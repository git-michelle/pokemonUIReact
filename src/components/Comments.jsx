/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_POKEMON_COMMENTS } from "../graphql/queries";
import {
  CREATE_POKEMON_COMMENT,
  UPDATE_POKEMON_COMMENT,
} from "../graphql/mutations";
import { css, jsx } from "@emotion/react";

const commentSectionContainer = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;
`;

const newCommentButton = css`
  background-color: #30bef7;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin-top: 5px;
  cursor: pointer;
  :hover {
    border: 2px solid #30bef7;
    background-color: transparent;
    padding: 8px;
    color: #30bef7;
  }
`;

const commentButton = css`
  margin-right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const commentContainer = css`
  margin: 10px 0;
  border-radius: 20px;
  background-color: whitesmoke;
  border: 1px solid lightgray;
  padding: 15px;
`;

const Comments = ({ id }) => {
  const [pokemonId, setPokemonId] = useState(null);

  const textAreaRef = useRef(null);

  const pokeId = id;
  console.log("_id in comments.jsx is ", pokeId);

  // read comments
  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(GET_POKEMON_COMMENTS, {
    variables: {
      pokemonId: pokeId,
    },
  });

  // create comments

  const [
    createComment,
    { loading: createCommentLoading, error: createCommentError },
  ] = useMutation(CREATE_POKEMON_COMMENT);

  const [
    updateComment,
    { loading: updateCommentLoading, error: updateCommentError },
  ] = useMutation(UPDATE_POKEMON_COMMENT);

  const createNewComment = () => {
    createComment({
      variables: {
        pokemonId: pokeId,
        text: textAreaRef.current.value,
      },
      optimisticResponse: {
        createComment: {
          __typename: "Comment",
          id: "lol123",
          author: "Jeff B",
          upvotes: 100,
          downvotes: 50,
          text: textAreaRef.current.value,
          pokemonId: pokeId,
          createdAt: Date.now().toString(),
          updatedAt: Date.now().toString(),
        },
      },
      update: (cache, { data }) => {
        console.log("cache is ", cache, "data is ", data);
        // read query from cache
        const oldComments = cache.readQuery({
          query: GET_POKEMON_COMMENTS,
          variables: { pokemonId: pokeId },
        }).pokemonComments;
        console.log("oldcomments is:", oldComments);
        //write the query back with the updated item
        const newComment = data.createComment;
        console.log("new comment is:", newComment);
        cache.writeQuery({
          query: GET_POKEMON_COMMENTS,
          variables: { pokemonId: pokeId },
          data: { pokemonComments: [newComment, ...oldComments] },
        });
      },
    });
  };

  const upvoteComment = (event, comment) => {
    updateComment({
      optimisticResponse: {
        updateComment: {
          ...comment,
          upvotes: comment.upvotes + 1,
          __typename: "Comment",
        },
      },
      variables: {
        commentId: comment.id,
        upvotes: comment.upvotes + 1,
        pokemonId: pokeId,
        text: comment.text,
      },
    });
  };

  const renderComments = () => {
    if (!commentsData) return;
    console.log(commentsData);
    return commentsData.pokemonComments.map((comment) => {
      return (
        <div key={comment.id} css={commentContainer}>
          <button
            css={commentButton}
            onClick={(e) => upvoteComment(e, comment)}
          >
            &#8679;
          </button>
          <span>{comment.upvotes}</span>
          <button css={commentButton}>&#8681;</button>
          <span>{comment.downvotes}</span>
          <button css={commentButton}>&#10060;</button>
          <p>
            {comment.text} - by {comment.author}
          </p>
        </div>
      );
    });
  };

  if (commentsLoading) return <p>Comments loading...</p>;
  if (commentsError)
    return <pre>Error: {JSON.stringify(commentsError, null, 3)}</pre>;

  return (
    <div css={commentSectionContainer}>
      <h2>Add new comment</h2>
      <textarea ref={textAreaRef} rows="5" name="newCommentInputBox" />
      <button onClick={createNewComment} css={newCommentButton}>
        Add comment!
      </button>
      <h2>Comments</h2>
      {renderComments()}
    </div>
  );
};

export default Comments;

import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { vote, unvote } from '../../actions/vote_actions';

export default function VoteToggle({ hasVoted, id, type, votes }) {
  const [ _vote, setVote ] = useState(() => hasVoted || false);
  
  useEffect(() => {
    setVote(hasVoted)
  }, [hasVoted]);
  
  const dispatch = useDispatch();

  const updateVote = () => {
    _vote ? dispatch(unvote(id, type)) : dispatch(vote(id, type))
  };

  return (
    <Button variant={_vote ? "outline-primary" : "primary"} onClick={updateVote}>{_vote ? 'Unvote' : 'Vote'} {votes}</Button>
  )
}
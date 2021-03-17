import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { vote, unvote } from '../../actions/vote_actions';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';;

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
    <IconButton aria-label="voteable" onClick={updateVote}>
      <>
        {_vote ? 
        <ArrowDropUpIcon />
        : 
        <ArrowDropUpIcon color="disabled" />
        }
        {votes}
      </>
    </IconButton>
  )
}
// <Button variant={_vote ? "outline-primary" : "primary"} onClick={updateVote}>{_vote ? 'Unvote' : 'Vote'} {votes}</Button>
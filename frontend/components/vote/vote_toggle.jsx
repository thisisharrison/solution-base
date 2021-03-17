import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { vote, unvote } from '../../actions/vote_actions';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { withStyles } from '@material-ui/core/styles';

const VoteButton = withStyles({
  root: {
    color: "#000000"
  },
})(IconButton);

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
    <VoteButton aria-label="voteable" onClick={updateVote}>
      <>
        {_vote ? 
        <ArrowDropUpIcon />
        : 
        <ArrowDropUpIcon color="disabled" />
        }
        {votes}
      </>
    </VoteButton>
  )
}
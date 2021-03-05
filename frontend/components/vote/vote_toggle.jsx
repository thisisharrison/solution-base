import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

export default function VoteToggle({ hasVoted }) {
  const [ vote, setVote ] = useState(() => hasVoted || false);

  const updateVote = () => {
    setVote(!vote);
  };

  return (
    <Button variant={vote ? "outline-primary" : "primary"} onClick={updateVote}>{vote ? 'Unvote' : 'Vote'}</Button>
  )
}
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const PostHeader = styled.h5`
  font-weight: 800;
  cursor: pointer;
`

export const PostContent = styled.div`
  small {
    font-size: 0.75rem;
  }
`

export const PostBody = styled.div`
  width: 90%;
  display: table;
  table-layout: fixed;
  div {
    display: table-cell;
  }
  .post-exerpt {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-all;
    font-size: 0.75rem;
  }
`

export const PostTag = styled.a`
  font-size: 0.75rem;
`

export const PostRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  text-align: right;
  small {
    font-size: 0.75rem;
  }
  .post-author {
    color: #62BCCC !important;
  }
  .post-date {
    color: #585858;
  }
`

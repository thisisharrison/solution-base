import { ListGroupItem } from "react-bootstrap";
import styled from 'styled-components';

export const TopicFilterItem = styled(ListGroupItem)`
  display: inline-flex;
  justify-content: space-between;
  font-weight: bold;
  cursor: pointer;
  .topic-name {
    font-size: 0.8125rem;
  }
  .num-posts {
    font-size: 1rem;
  }
`
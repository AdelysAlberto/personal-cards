import styled from 'styled-components';

const Row = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
    background-color: blue;
  }
`;

export default Row;

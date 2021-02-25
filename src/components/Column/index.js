import styled from 'styled-components';

const getWidth = span => {
  if (!span) return;
  const width = (span / 12) * 100;
  return `width ${width}%;`;
};

const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidth(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)};
  }
`;

export default Column;

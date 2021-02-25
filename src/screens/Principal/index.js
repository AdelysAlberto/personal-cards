import React from 'react';
import styled from 'styled-components';
import Column from '../../components/Column';
import Row from '../../components/Row';

const StyledTitle = styled.div`
  background-color: #f20;
`;

const Principal = () => {
  return (
    <div className={'container bg-white'}>
      <Row>
        <Column xs={12} sm={6} lg={4}>
          uno
        </Column>
        <Column xs={12} sm={6} lg={4}>
          Dos
        </Column>
        <Column xs={12} sm={6} lg={4}>
          Tress
        </Column>
      </Row>
      <StyledTitle className={'text'}>Otro Titulo</StyledTitle>
      <div> Title</div>
    </div>
  );
};

export default Principal;

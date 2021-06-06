import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const NotFoundContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .not-found-code {
    font-size: 8rem;
    color: #a0a0a0;
    font-weight: 500
  }

  & code {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: .2em .4em;
    font-size: 85%;
  }
`

function NoFoundPage() {
  return (
    <Layout current='404' hasSider={false} title="Not Found">
      <NotFoundContainer className='not-found'>
        <div className='not-found-code'>
          404
        </div>
        <div className='not-found-info'>
          Path not found on this site
        </div>
      </NotFoundContainer>
    </Layout>
  )
}

export default NoFoundPage;
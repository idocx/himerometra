import React from 'react';
import photo from '../images/photo.jpg'
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons'; 
import { Tooltip, Divider } from 'antd';
import styled from 'styled-components';

const SiderDiv = styled.div`
  .accounts {
    font-size: 1.6em;
  }

  .accounts > a {
    color: #000;
    margin-right: 8px;
  }

  .accounts > a:hover {
    color: #40a9ff;
  }

  .avatar,
  .profiles, 
  .social-accounts, 
  .email-addr {
    margin-bottom: 24px;
  }

  & h1, h2, h3 {
    margin-bottom: 0;
  }

  & h2 {
    color: #494949;
  }

  & h4 {
    color: #595959
  }

  #photo {
    width: 80%;
    border-radius: 50%;
  }
`;

const SiderDivCollapsed = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  align-items: center;

  #photo-small {
    width: 72px;
    border-radius: 50%;
    border: 2px #cacaca solid;
  }
`;

function SiderContainer() {
  return (
    <SiderDiv className='sider-container'>
      <div className='avatar'>
        <img 
          id='photo'
          src={photo} 
          alt='avatar' 
        />
      </div>

      <div className='profiles'>
        <h1 style={{ fontSize: '1.6em' }}>
          Yuxing Fei (<span className='zh-cn'>费宇星</span>)
        </h1>
        <h3 style={{ fontSize: '1.2em' }}>
          Ph.D. student (1st year)
        </h3>
        <h4 style={{ fontSize: '1em' }}>
          Department of Material Science and Engineering, UC Berkeley
        </h4>
      </div>
    
      <div className='social-accounts'>
        <h3>Social Accounts</h3>
        <div className='accounts'>
          <Tooltip title='Github'>
            <a className='account' 
              rel="noreferrer" 
              href='https://github.com/idocx' 
              target='_blank'
            >
              <GithubOutlined />
            </a>
          </Tooltip>
          <Tooltip title='Linkedin'>
            <a className='account' 
              rel="noreferrer" 
              href='https://www.linkedin.com/in/yuxing-fei-5952651b1/' 
              target='_blank'
            >
              <LinkedinFilled />
            </a>
          </Tooltip>
        </div>
      </div>

      <div className='email-addr'>
        <h3>Email</h3>
        <div className='emails'>
          yuxingfei@berkeley.edu
          yuxingfei@whu.edu.cn
        </div>
      </div>
    </SiderDiv>
  )
}

function SiderContainerCollapsed() {
  return (
    <div className='sider-container-collapsed'>
      <SiderDivCollapsed>
        <div className='avatar-small' style={{ margin: '8px 16px' }}>
          <img 
            id='photo-small' 
            src={photo} 
            alt='avatar' 
          />
        </div>
        <div className='short-info'>
          <div className='name' style={{ fontSize: '1.2rem', fontWeight: 500 }}>
            Yuxing Fei (<span className='zh-cn'>费宇星</span>)
          </div>
          <div className='short-description'>
            Ph.D. student @ Department of Material Science and Engineering, UC Berkeley
          </div>
        </div>
      </SiderDivCollapsed>
      <Divider />
    </div>
  )
}

export {SiderContainer, SiderContainerCollapsed};
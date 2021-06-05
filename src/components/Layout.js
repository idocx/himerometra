import React from 'react';
import { Layout as LayoutAntd, BackTop } from 'antd';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import { Link } from 'gatsby';
import { SiderContainer, SiderContainerCollapsed } from './SiderContainer';
import 'antd/dist/antd.css';
import './layout.css';

const BREAK_POINT = 768;

const {
  Header: HeaderAntd,
  Sider: SiderAntd,
  Content: ContentAntd,
  Footer: FooterAntd,
} = LayoutAntd;

function Header({ current }) {
  return (
    <HeaderAntd>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link className='page-title' to='/' style={{ color: 'inherit' }}>
          <h1 className='page-title-text' style={{ marginBottom: 0, fontSize: '1.25rem' }}>
            Yuxing Fei's Personal Page
          </h1>
        </Link>
        <HeaderMenu current={current}></HeaderMenu>
      </div>
    </HeaderAntd>
  )
}

function Sider() {
  return (
    <SiderAntd
      theme='light'
      width='300px'
    >
      <SiderContainer />
      <SiderContainerCollapsed />
    </SiderAntd>
  )
}

function Footer() {
  return (
      <FooterAntd
        style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.7)', fontSize: '0.9em' }}
      >
        Run with <a href='https://github.com/idocx/himerometra' target='_blank' rel="noreferrer">
          Himerometra
        </a> by Yuxing. Icons made by <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a> from <a href="https://www.flaticon.com/" title="Flaticon">FlatIcon</a>
      </FooterAntd>
  )
}

const StyledLayoutAntd = styled(LayoutAntd)`
  background: #fff;

  .ant-layout-header {
    padding: 0 48px;
    margin-bottom: 16px;
    height: unset;
    border-bottom: 1px solid #f0f0f0;
  }

  .page-title-text {
    transition: all 0.2s;
  }

  .page-title-text:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  .ant-layout-header,
  .ant-layout-footer {
    background: #fff;
  }

  .ant-layout-sider,
  .ant-layout-content {
    padding: 16px 24px;
  }

  .ant-layout-sider {
    transition: none;
  }

  .ant-divider-horizontal {
    margin: 8px 0;
  }

  .ant-menu-title-content {
    font-weight: 500;
  }

  .sider-container {
    display: block;
  }

  .sider-container-collapsed {
    display: none;
  }

  @media (max-width: ${BREAK_POINT}px) {
    .main-container {
      flex-direction: column !important;
    }

    .page-title {
      display: none;
    }

    .ant-layout-header {
      padding: 0 24px;
    }

    .ant-layout-sider,
    .ant-layout-content {
      padding: 4px 32px;
    }

    .ant-layout-sider {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 100% !important;
      flex: unset !important;
    }

    .main-container > .ant-layout-content {
      width: 100% !important;
    }

    .sider-container {
      display: none !important;
    }
  
    .sider-container-collapsed {
      display: flex !important;
    }
  }
`;

function Layout({ children, hasSider, current }) {
  return (
      <StyledLayoutAntd>
        <Header current={current}></Header>
        <BackTop />
        <StyledLayoutAntd className='main-container' style={{ minHeight: '75vh'}}>
          {hasSider ? <Sider /> : null}
          <ContentAntd>
            {children}
          </ContentAntd>
        </StyledLayoutAntd>
        <Footer></Footer>
      </StyledLayoutAntd>
  )
}

export default Layout;
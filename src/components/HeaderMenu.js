import { Menu } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'gatsby';
import React from 'react';

const StyledMenu = styled(Menu)`
  border-bottom: none;
`;

function HeaderMenu() {
  let current_tag;
  if (typeof window === 'undefined') {
    current_tag = '';
  } else if (window.location.pathname === '/') {
    current_tag = 'home';  // homepage
  } else {
    current_tag = /(?<=\/)[^/]+/.exec(window.location.pathname)[0];
  }
  const [ selected_key, set_selected_key ] = useState(current_tag);

  const handleSelect = ({ key }) => {
    if (key !== 'cv' || key !== 'old-site') {
      set_selected_key(key);
    }
  };

  return (
    <StyledMenu mode='horizontal' 
      activeKey={[selected_key]}
      selectedKeys={[selected_key]} 
      onSelect={handleSelect}
    >
      <Menu.Item key='home' title='Home'>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='cv' title='View CV'>
        <Link to='/yuxing_cv.pdf'>CV</Link>
      </Menu.Item>
      <Menu.Item key='old-site' title='Visit Old Site'>
        <a href='https://old.yuxingfei.com'>Old Site</a>
      </Menu.Item>
    </StyledMenu>
  )
}

export default HeaderMenu;
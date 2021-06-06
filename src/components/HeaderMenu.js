import { Menu } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'gatsby';
import React from 'react';

const StyledMenu = styled(Menu)`
  border-bottom: none;
`;

function HeaderMenu({ current }) {
  const [ selected_key, set_selected_key ] = useState(current);

  const handleSelect = ({ key }) => {
    set_selected_key(key);
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
      <Menu.Item key='publications' title='Publications'>
        <Link to='/publications/'>Publications</Link>
      </Menu.Item>
      <Menu.Item key='cv' title='CV'>
        <a href='/yuxing_cv.pdf'>CV</a>
      </Menu.Item>
    </StyledMenu>
  )
}

export default HeaderMenu;
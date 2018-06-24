import React from 'react';
import {Link} from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class view extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="setting" /><span>Navigation</span></span>}>
          <Menu.Item key="1">Home<Link to="/home"></Link></Menu.Item>
          <Menu.Item key="2">Counter<Link to="/counter"></Link></Menu.Item>
          <Menu.Item key="3">About<Link to="/about"></Link></Menu.Item>
          <Menu.Item key="4">TechTable<Link to="/techTable"></Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export {view};

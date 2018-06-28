import React from 'react';
import {Link} from 'react-router';
import { Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';


class view extends React.Component {
  state = {
    current: browserHistory.getCurrentLocation().pathname.split('/')[1],
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="left-menu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ width: 256 }}
        >
          <Menu.Item key="home">
            <Icon type="home" />home<Link to="/home"></Link>
          </Menu.Item>
          <Menu.Item key="techs">
            <Icon type="setting" />techs<Link to="/techs"></Link>
          </Menu.Item>
          <Menu.Item key="weather">
            <Icon type="cloud" />weather<Link to="/weather"></Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export {view};
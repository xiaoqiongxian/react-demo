import React from 'react';
import {connect} from 'react-redux';
import { Icon } from 'antd';
import {search} from '../actions.js';

class SearchTech extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''
    };
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  search = () => {
    this.props.onSearch(this.state.value);
  }
  render() {
    return (
      <div className="tool-search">
        <input onChange={this.onInputChange} value={this.state.value}/>
        <Icon type="search" className="search-icon" onClick={this.search}></Icon>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (text) => {
      dispatch(search(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchTech);


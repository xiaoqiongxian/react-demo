import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {add} from '../actions.js';

class AddTech extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onStatusInputChange = this.onStatusInputChange.bind(this);

    this.state = {
      name: '',
      status: ''
    };
  }

  onSubmit(ev) {
    ev.preventDefault();

    /*const inputNameValue = this.state.name;
    const inputStatusValue = this.state.status;
    if (!inputNameValue.trim() && !inputNameValue.trim()) {
     return;
    }
*/
    const tech = {
      name:this.state.name,
      status:this.state.status
    }

    this.props.onAdd(tech);
    this.setState({name: ''});
    this.setState({status: ''});
  }

  onNameInputChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onStatusInputChange(event) {
    this.setState({
      status: event.target.value
    });
  }

  render() {
    return (
      <div className="add-tech">
        <form onSubmit={this.onSubmit}>
        <input className="new-tech" onChange={this.onNameInputChange} value={this.state.name} />
          <input className="new-tech" onChange={this.onStatusInputChange} value={this.state.status} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (tech) => {
      dispatch(add(tech));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTech);


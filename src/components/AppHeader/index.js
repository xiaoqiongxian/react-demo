import React from 'react';

class view extends React.Component {
  state = {
    title: 'React Demo',
  }
  render() {
    return (
      <div className="app-header">
        <div className="header-title">{this.state.title}</div>
      </div>
    );
  }
}

export {view};
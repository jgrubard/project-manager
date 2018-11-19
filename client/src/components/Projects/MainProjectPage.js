import React, { Component } from 'react';

class MainProjectPage extends Component {
  render() {
    const { project, toggleDashboard, showDash } = this.props;
    const toggleMessage = showDash ? 'hide' : 'show'
    return (
      <div>
        <h2>Main Project Page: {project.name}</h2>
        <span style={{ cursor: 'pointer' }} onClick={toggleDashboard}>({toggleMessage} dashboard menu)</span>
      </div>
    );
  }
}

export default MainProjectPage;
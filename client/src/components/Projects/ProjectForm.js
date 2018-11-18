import React, { Component } from 'react';

import { Button, Input } from '../Library';

class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    console.log(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    const { handleChange, onSubmit } = this;
    const { name } = this.state;
    return (
      <div style={{ padding: '10 0', marginTop: '10px' }}>
        Create New Project
        <Input
          placeholder='Project Name'
          onChange={handleChange}
          name='name'
          value={name}
        />
        <Button
          label='Create'
          onClick={onSubmit}
          active={true}
        />
      </div>
    );
  }
}

export default ProjectForm;
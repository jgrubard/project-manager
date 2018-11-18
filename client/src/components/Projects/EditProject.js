import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CloseButton } from '../Library';

class EditProject extends Component {
  constructor() {
    super();
  }

  render() {
    const { toggleModal } = this.props;
    return (
      <div className='modal-container'>
        <div className='button-close'>
          <CloseButton
            onClick={toggleModal}
            label='X'
            active={true}
          />
        </div>
        <h4>Edit Project:</h4>
      </div>
    );
  }
}

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(EditProject);
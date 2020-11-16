// ContextWrapper.jsx
import React from 'react';
import PropTypes from 'prop-types';

class ContextWrapper extends React.Component {
  getChildContext() {
    return { initialState: this.props.initialState };
  }

  render() {
    return this.props.children;
  }
}

ContextWrapper.childContextTypes = {
  initialState: PropTypes.object,
};

ContextWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  initialState: PropTypes.object,
};

export default ContextWrapper;

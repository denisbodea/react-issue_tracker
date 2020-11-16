// HelloWorld.jsx
import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ addressee: 'Universe' });
    }, 50000);
  }

  render() {
    return (
      <h1>Hello {this.state.addressee}!</h1>
    );
  }
}

HelloWorld.propTypes = {
  addressee: PropTypes.string,
};

HelloWorld.defaultProps = {
  addressee: '',
};

export default HelloWorld;

// withToast.jsx
import React from 'react';
import Toast from './Toast.jsx';

function withToast(OriginalComponent) {
  return class WithToast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toastVisible: false, toastMessage: '', toastType: 'success'
      };
      this.showSucess = this.showSucess.bind(this);
      this.showError = this.showError.bind(this);
      this.dismissToast = this.dismissToast.bind(this);
    }

    showSucess(message) {
      this.setState({ toastVisible: true, toastMessage: message, toastType: 'success' });
    }

    showError(message) {
      this.setState({ toastVisible: true, toastMessage: message, toastType: 'danger' });
    }

    dismissToast() {
      this.setState({ toastVisible: false });
    }

    render() {
      return (
        <div>
          <OriginalComponent 
            showError={this.showError} showSucess={this.showSucess}
            {...this.props}
          />
          <Toast
            showing={this.state.toastVisible} message={this.state.toastMessage}
            onDismiss={this.dismissToast} bsStyle={this.state.toastType}
          />
        </div>
      );
    }
  };
}

export default withToast;

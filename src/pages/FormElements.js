import React from 'react';
import ReactDOM from 'react-dom';

export default class TextInput extends React.Component {
  render() {
    const { id, name, placeholder } = this.props;
    return (
      <div>
        <label htmlFor="some-id">
          Some text input
        </label>
        <input id="some-id" type="text" />
      </div>
      
    );
  }
}

export default class NumberInput extends React.Component {
  render() {
    const { id, name, placeholder } = this.props;
    return (
      <div>
        <label htmlFor="some-id">
          Some number input
        </label>
        <input id="some-id" type="number" />
      </div>
      
    );
  }
}

export default class NumberInput extends React.Component {
    render() {
      const { id, name, placeholder } = this.props;
      return (
        <div>
          <label htmlFor="some-id">
            Some number input
          </label>
          <input id="some-id" type="number" />
        </div>
        
      );
    }
  }


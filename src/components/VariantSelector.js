import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    const { name, values } = this.props.option
    return (
      <select
        name={name}
        key={name}
        onChange={this.props.handleOptionChange}
      >
        {values.map((value) => {
          return (
            <option value={value} key={`${name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    );
  }
}

export default VariantSelector;

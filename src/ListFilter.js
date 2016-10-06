import React from 'react';

class ListFilter extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({value: ev.target.value});
    this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <input
        onChange={this.handleChange}
        placeholder="Filter by name…"
        value={this.state.value}
      />
    );
  }
}

ListFilter.propTypes = {
  onChange: React.PropTypes.func
}

export default ListFilter;

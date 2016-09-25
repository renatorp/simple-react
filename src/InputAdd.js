import React, { Component } from 'react';

class InputAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleAdd() {
      this.props.onclick(this.state.value);
    return;
  }

  render() {
    return (
            <div className="input-group">
              <input type="text" id="palavraAdd" className="form-control" placeholder="Digite uma palavra..." value={this.state.value}  onChange={this.handleChange}/>
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button" onClick={this.handleAdd}>Add</button>
              </span>
            </div>
    );
  }
}

export default InputAdd;
import React, { Component } from 'react';

class ListaPalavras extends Component {

    constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(item) {
    this.props.onRemovePalavra(item);
  }

  render() {
    var showPalavras = this.props.items.map(function (item) {
        return (
          <li className="list-group-item" key={Math.random()}>
            {item} <button type="button" onClick={() => this.handleRemove(item)} className="close pull-right" aria-label="Close"><span aria-hidden="true">&times;</span></button>          
          </li>
        );
      }, this);

    return (
      <ul className="list-group">
          {showPalavras}
      </ul>
    );
  }
}

export default ListaPalavras;

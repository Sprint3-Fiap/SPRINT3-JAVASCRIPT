import React, { Component } from 'react';

class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      mensagem: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário, por exemplo, para um servidor ou fazer algo com os dados localmente.
    console.log('Dados do formulário:', this.state);
  }

  render() {
    return (
      <div className="contato">
        <h2>Entre em Contato Conosco</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={this.state.mensagem}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contato;

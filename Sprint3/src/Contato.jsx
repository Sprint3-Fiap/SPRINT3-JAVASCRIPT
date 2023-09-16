import React, { useState, useEffect } from 'react';
import './Contato.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [comentario, setComentario] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem('contactData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setSubmittedData(parsedData);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validar o email
    if (!validateEmail(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Validar o telefone
    if (!validateTelefone(telefone)) {
      alert('Por favor, insira um número de telefone válido.');
      return;
    }

    const contactData = {
      name,
      email,
      telefone,
      comentario,
    };

    localStorage.setItem('contactData', JSON.stringify(contactData));

    setSubmittedData(contactData);

    // Limpar
    setName('');
    setEmail('');
    setTelefone('');
    setComentario('');
    setShowForm(false); 
  };


  const handleAddMoreInfo = () => {
    const shouldShowFormAgain = Math.random() < 0.5;
    setShowForm(shouldShowFormAgain);
    setShowAddMoreInfo(false);
  };
  // Função para validar o email
  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  // Função para validar o telefone
  const validateTelefone = (telefone) => {
    const pattern = /^\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{4}$/;
    return pattern.test(telefone);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleFormSubmit} id="contact-form">
          <section className="p-5 d-flex justify-content-center">
            <h2>Deixe seu contato e comentário para orçamentos!</h2>
          </section>
          <section id="contato"className="p-5 d-flex justify-content-center align-items-center">
            <div className="card">
              <span className="title">Contato</span>
              <div className="form">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Ex: João da Silva"
                    required
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Nome</label>
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Ex: exemplo@email.com"
                    required
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="group">
                  <input
                    type="text"
                    placeholder="Ex: (99) 1234-5678"
                    required
                    id="telefone"
                    name="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                  <label htmlFor="telefone">Telefone</label>
                </div>
                <div className="group">
                  <textarea
                    placeholder="Ex: Deixe seu comentário aqui..."
                    rows="5"
                    required
                    id="comentario"
                    name="comentario"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                  ></textarea>
                  <label htmlFor="comentario">Comentário</label>
                </div>

                <button className="btn" type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </section>
        </form>
      ) : null}

      {submittedData && (
        <div className="alert alert-success mt-3">
          <h3 className="mb-3">Entraremos em Contato em Breve</h3>
          <h3>Dados enviados:</h3>
          <p><strong>Nome:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Telefone:</strong> {submittedData.telefone}</p>
        <div>
          <h3>Se algum dado foi enviado errado:</h3>
          <button className='btn' onClick={handleAddMoreInfo}>Alterar Informações</button>
        </div>
        </div>
      )}
      ]
    </div>
  );
}

export default ContactForm;

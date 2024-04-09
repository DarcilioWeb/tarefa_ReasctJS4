import React, { useState } from 'react'

const FormularioDeContato = () => {
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const dadosContato = {
        nome: nome,
        contato: contato,
        mensagem: mensagem
    };

    const jsonToSend = JSON.stringify(dadosContato)

    console.log(jsonToSend)

    setNome('');
    setContato('');
    setMensagem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='nome'>Nome:</label>
        <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor='contao'>Contato:</label>
        <input type='text' value={contato} onChange={(e) => setContato(e.target.value)} />
      </div>
      <div>
        <label htmlFor='nome'>Mensagem:</label>
        <input value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default FormularioDeContato
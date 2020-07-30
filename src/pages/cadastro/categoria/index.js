import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [values, setValues] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(ev) {
    setValor(ev.target.getAttribute('name'), 
    ev.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(ev) => {
        ev.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>
        <div>
          <FormField name="nome" type="text" value={values.nome} onChange={handleChange} />
          <FormField name="descricao" type="textarea" value={values.descricao} onChange={handleChange} />
          <FormField name="cor" type="color" value={values.cor} onChange={handleChange} />            
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}</li>
          )          
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
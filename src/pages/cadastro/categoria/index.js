/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(ev) {
    setValor(ev.target.getAttribute('name'), ev.target.value);
  }

  useEffect(() => {
    const urlApi = 'http://localhost:8080/categorias';
    fetch(urlApi).then(async (res) => {
      const resJson = await res.json();
      setCategorias([...resJson]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(ev) => {
        ev.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <div>
          <FormField name="nome" type="text" value={values.nome} onChange={handleChange} />
          <FormField name="descricao" type="textarea" value={values.descricao} onChange={handleChange} />
          <FormField name="cor" type="color" value={values.cor} onChange={handleChange} />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

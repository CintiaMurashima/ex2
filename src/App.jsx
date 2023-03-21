import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  const [item, setItem] = useState("");
  const [lista, setLista] = useState(['aaa', 'bbb', 'ccc']);
  const listaItems = lista.map((el, index) => <li key={index}>{el}</li>);
  const listaFilas = lista.map((el, index) => <tr key={index}><td>{index}</td><td>{el}</td></tr>);
  function nuevoItem() {
    const nuevaList = [...lista];
    nuevaList.push(item);
    setLista(nuevaList);
    setItem("");
  }


  return (

    <div className="App">
      <container>
        <h1>Hola React</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Entra valor</Form.Label>
            <Form.Control type="text" value={item} onInput={(e) => setItem(e.target.value)} placeholder="Enter email" />
          </Form.Group>
          <Button variant="success" onClick={nuevoItem}>Añadir</Button>
        </Form>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {listaFilas}
          </tbody>
        </Table>

      </container>
    </div>
  )
}

export default App

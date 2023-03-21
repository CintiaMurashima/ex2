import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

const [item, setItem]= useState("");
const [list, setList]= useState([]);

  return (

    <div className="App">
      <container>
        <h1>Hola React</h1>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>

      </container>
    </div>
  )
}

export default App

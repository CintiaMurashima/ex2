import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {

 
  const objetCat = [
    {
    categoria: 'personal',
    name: 'Mustang',
  },
  {
    categoria: 'familia',
    name: 'lala',
  },
  {
    categoria: 'urgente',
    name: 'hoa',
  }
]
  const [item, setItem] = useState("");
  const [lista, setLista] = useState(objetCat);
  const [categoria, setCategoria] = useState();
  

  // const [color, setColor] = useState();
  const listaItems = lista.map((el, index) => <li key={index}>{el.name}</li>);

    // const estilo = {
    //   backgroundColor: color,
    // }

  function borraItem(x) {
    const nuevaList = [...lista];
    nuevaList.splice(x, 1);
    setLista(nuevaList);
  }
  // function cambioColor(item) {
  //   if(item === "Urgente"){
  //     setColor("red");
  //   }else{
  //     setColor("blue");
  //   }
  // }
  
  function nuevoItem() {

    const nuevaList = [...lista];
    const nuevoObj = {};
    nuevoObj.name = item;
    nuevoObj.categoria=categoria;
    nuevaList.push(nuevoObj);
    // cambioColor(item);
    setLista(nuevaList);
    setItem("");
  }

  const colorFondo = {
    
    "trabajo": {
      backgroundColor: "blue"
    },
    "urgente": {
      backgroundColor: "red"
    },
    "familia": {
      backgroundColor: "green"
    },
    "personal": {
      backgroundColor: "pink"
    }
    
  }
  const listaFilas = lista.map((el, index) =>
    <tr style={colorFondo[el.categoria]} key={index} >
      <td>{index + 1}</td>
      <td>{el.name}</td>
      <td>{el.categoria}</td>
      <td>
        <Button className='papelera' variant="danger" onClick={() => borraItem(index)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>

        {/* <span className='papelera'>
        <FontAwesomeIcon icon={faTrash} onClick={()=>borraItem(index)}/>
     </span> */}
      </td>
    </tr>);




  // function borrarLista() {
  //   setLista([]);
  // }


  return (


    <div className="App">
      <h1>Hola React</h1>
      <container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" value={item} onInput={(e) => setItem(e.target.value)} placeholder="Ingresar" />
                {/* <Form.Control type="text" value={item} onInput={(e) => setItem(e.target.value)} placeholder="Ingresar" /> */}
              </Form.Group>
              <Form.Select value={categoria} onInput={(e) => setCategoria(e.target.value)}>
                  <option value="trabajo">Trabajo</option>
                  <option value="personal">Personal</option>
                  <option value="urgente">Urgente</option>
                  <option value="familia">Familia</option>
              </Form.Select>
              <Button variant="success" onClick={nuevoItem}>Añadir</Button>
            </Form>
           
            <hr />
          </Col>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Categoria</th>
                </tr>
              </thead>
              <tbody>
                {listaFilas}
              </tbody>
            </Table>
            <Button variant='danger' onClick={() => setLista([])}>Borrar</Button>
          </Col>
        </Row>

      </container>
    </div>
  )
}

export default App

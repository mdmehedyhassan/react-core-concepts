import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'hero alam', 'Bapparaz', 'Manna'];
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'Premiere El', price:'$249.99'}
  ]
 

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name = 'Ruble Nayok'  nayika='Moushomi'></Person>
        <Person name = 'Jasim'  nayika='Sabana'></Person>
        <Person name = 'Bapparaz'  nayika='nai'></Person>
        <Person name = 'Elias Kanchon'  nayika='Anjo'></Person>

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div> 
  )
}
function Product(props){
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'tomato',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '5px'
  }
  
  const {name, price} = props.product;
  console.log(name, price)
  
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price} </h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border: '10px dotted green',
    margin: '10px',
    color: 'yellow',
    backgroundColor: 'red',
    width: '500px'
  }
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h5>Nayika: {props.nayika}</h5>
      <p  style = {{backgroundColor: 'yellow', color: 'red', border: '2px solid green', margin: '5px'}}>love</p>
    </div>
  )
}

export default App;

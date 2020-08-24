import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alomgir', 'Jasim', 'Manna', 'Salman Shah', 'Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$95.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My First Paragraph</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        {/* <Product product = {products[0]} ></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>  */}
        <Person name = 'Sakib Al Hasan' position = 'World No. 1 Allrounder' country = 'Bangladesh' JerseyNo = '75' ></Person>
        <Person name = 'Sachin Tendulkar' position = 'World Famous Batsman' country = 'India' JerseyNo = '10'></Person>
        
      </header>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(6);
  return(
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    color: 'black'
  }
  const {name, price} = props.product;
  return(
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle = {
    border: '2px solid cyan',
    margin: '10px',
    width: '750px'
  }
  return (
    <div style = {personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Position: {props.position}</h3>
      <h3>Country: {props.country}</h3>
      <h3>Jersey No.: {props.JerseyNo}</h3>
    </div>
  )
}

export default App;

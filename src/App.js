import React, { useState, useEffect } from 'react';
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
        <Users></Users>
        <Posts></Posts>
        <Todo></Todo>
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
      <button onClick = {() => setCount(count-1)}>Decrease</button>
      <button onClick = {()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>Name: {user.name} , Phone: {user.phone} , Email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Posts(){
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  })
  return(
    <div>
      <h3>Users Post:</h3>
      <ul>
        {
          posts.map(post => <li>Id: {post.id} , Title: {post.title}</li>)
        }
      </ul>
    </div>
  )
}

function Todo(){
  const [todos, setTodo] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodo(data))
  })
  return(
    <div>
      <h3>Todo List</h3>
      <ul>
        {
          todos.map( todo => <li>Id: {todo.id} , Title: {todo.title} , User Id: {todo.userId} </li>)
        }
      </ul>
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

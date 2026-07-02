import { useState, useEffect } from 'react';
import './App.css';
import User from './User';
import Header from './Header';
import Login, { Profile, Setting } from './UserComponent';
import ChangeName from './Hookss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Route, Routes, Link } from 'react-router';
import About from './About';
import Home from './Home';


import { Button } from 'react-bootstrap';

function App() {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // let userName = "John Doe";
  // let age = 30;
  // let email = "john@gmailcom";

  let userObject = {
    name: "John Doe",
    age: 30,
    email: "john@gmail.com"
  };

  

  const getUserData = async() => {

    
    const url= "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
  }
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Link to="/">Home</Link>
      <Link to="/about">About</Link >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Header />
      <Froot />
      <ChangeName />

      <Login />
      <Profile />
      <Setting />
      <Colors />
      <h1> Hello Dear, Welcome to React 19</h1>
      {/* <User /> */}

      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      <Button variant='primary'>Hello</Button>

      <h1>Toggle in  React</h1>
      <button onClick={() => setDisplay(!display)}>
        {display ? 'Hide TOGGLE' : 'Show TOGGLE'}
      </button>
      {display ? <h1>Toggle is ON</h1> : <h1>Toggle is OFF</h1>}

      {/* to hide or show any component we can use this logic */}
      {/* {display ? <User /> : null} */}



      {/* Multiple condition case */}
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        {count == 0 ? <h1>Count is zero</h1>
          : count == 1 ? <h1>Count is 1</h1>
            : count == 2 ? <h1>Count is 2</h1>
              : <h1>Other</h1>
        }
      </div>



      {/* Props in React */}
      <div>
        <h1>Props in React</h1>

        {/* hard coded values */}
        {/* <User name="John Doe" age={30} email="john@gmail.com" />   */}

        {/* dynamic values */}
        {/* <User name={userName} age={age} email={email} /> */}

        {/* for object */}
        <User user={userObject} />

      </div>



      <h1 className="text-3xl bg-red-500 border-green-500 border-5 font-bold underline">
        Hello world!
      </h1>


      <h1> Fetch data from API</h1>

      <h1>Integrated JSOn Server API and Loader</h1>
      { !loading ?
        userData.map((user) => (
            <ul key={user.id}>
              <li>Name: {user.name} </li>
              <li>Email: {user.email}</li>
              <li>Age: {user.age}</li>
              <hr />
            </ul>
          )
        ): <h3> Data Loading...</h3>

      }




    </>
  )
}

function Froot() {
  return (
    <div>
      <h1> Apple </h1>
    </div>
  )

}
function Colors() {
  return (
    <h1> Red </h1>
  )

}


export default App


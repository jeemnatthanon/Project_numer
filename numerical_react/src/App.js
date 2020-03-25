import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Bisection from './RootofEquations/Bisection';
import FalsePosition from './RootofEquations/FalsePosition';
import OnePoint from './RootofEquations/OnePoint';
import Newton from './RootofEquations/Newton';
import Secant from './RootofEquations/Secant';

import GaussElimination from './LinearAlgebra/GaussElimination';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/Home">Numrical Method</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Root of Equation" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                <NavDropdown.Item href="/FalsePosition">False-Position</NavDropdown.Item>
                <NavDropdown.Item href="/OnePoint">One-Point Iteration Method</NavDropdown.Item>
                <NavDropdown.Item href="/Newton">Newton-Raphson</NavDropdown.Item>
                <NavDropdown.Item href="/Secant">Secant Method</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Linear Algebra" id="basic-nav-dropdown">
                <NavDropdown.Item href="/GaussElimination">Gauss Elimination</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gaauss Jordan</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Matrix Inversion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">LU Decomposition</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Cholesky Decomposition</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Jacobi Decomposition</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Gauss Seidel Iteration</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Conjugatgradient</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Integration" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Trapezidal Rule</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Composite Trapezidal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Simson's Rule 1/3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Composite Simson's Rule</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Simson's Rule 3/8</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
        <Switch>
                <Route path='/Home' component={Home} />
              <Route path='/Bisection' component={Bisection} />
              <Route path='/FalsePosition' component={FalsePosition} />
              <Route path='/OnePoint' component={OnePoint} />
              <Route path='/Newton' component={Newton} />
              <Route path='/Secant' component={Secant} />

              <Route path='/GaussElimination' component={GaussElimination} />
        </Switch>
      </Router>
    )
  }
}

export default App;
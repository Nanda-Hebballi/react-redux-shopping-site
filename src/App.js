import './App.css';
import React from 'react';
import store from './TaskTracker/redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import TasksList from './TaskTracker/components/TasksList';
import TaskDetail from './TaskTracker/components/TaskDetail';
import Topnav from './TaskTracker/components/Topnav';
import Sidenav from './TaskTracker/components/Sidenav';
import './TaskTracker/TaskTracker.css'
import { Redirect } from 'react-router';
import { Row,Col,Container } from 'react-bootstrap';
import Cart from './TaskTracker/components/cart'

function App() {
  return (
  <Provider store={store}>
    <Container fluid className="p-0">
      <Router>
        <Row className="p-0 m-0">
          <Col className="p-0">
          <Topnav/>
           </Col>
        </Row> 
         <Row className="p-0 m-0">
          <Col xs={12} md={2} className="sidenavClass">
          <Sidenav/>
          </Col>
          <Col xs={12} md={10} className="mainContentClass pt-2 mt-2">
            <Switch>
              <Route exact path="/products">
                <TasksList/>
              </Route>
              <Route exact path="/">
                <Redirect to='/products' />
              </Route>
              <Route exact path="/products/category/:type/:id">
                <TaskDetail/>
              </Route>
               <Route exact path="/products/category/:type">
                <TasksList/>
              </Route>
               <Route exact path="/cart">
                <Cart/>
              </Route>
            </Switch>
            <Link to='/cart'>
              <i className="fas fa-shopping-cart cart-topnav"></i>
            </Link>
           </Col>
        </Row>
        </Router>
    </Container>  
  </Provider>
  );
}

export default App;

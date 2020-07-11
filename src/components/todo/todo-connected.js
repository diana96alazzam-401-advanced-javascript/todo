import React, { useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/ajax-hook';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// import { SettingsContext } from '../context/settings.js';


const todoAPI = 'https://todo-app-server-lab32.herokuapp.com/api/v1/todo';

const ToDo = () => {

  // const settingsContext = useContext(SettingsContext);

  const ajaxHook = useAjax();

  const _addItem = (item) => {
    item.due = new Date();
    ajaxHook.apiCall(todoAPI, 'post', item);
  };

  const _toggleComplete = id => {

    let item = ajaxHook.list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      ajaxHook.apiCall(url, 'put', item);
    };
  };

  const _getTodoItems = () => {
    ajaxHook.apiCall(todoAPI, 'get');
  };

  const _deleteTodoItems = id => {

    let item = ajaxHook.list.filter(i => i._id === id)[0] || {};
   
    if (item._id) {
      let url = `${todoAPI}/${id}`;
      ajaxHook.apiCall(url, 'delete');
    }
  };

  useEffect(_getTodoItems, []);
  if(ajaxHook.list){
    return (
      <div style={{ textAlign: 'center' }}>
        <header>
          <Navbar bg="primary" variant="dark" >
            <Nav className="mr-auto">
              <Nav.Link href="/" >Home</Nav.Link>
            </Nav>
          </Navbar>
        </header>
  
        <section className="todo" style={{ display: 'inline-block', marginTop: '2vh', textAlign: 'left' }} >
          <CardGroup >
  
            <div style={{ width: '80vw' }} >
              <Card.Title style={{ width: '80vw', marginBottom: '0vh' }}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ color: 'white' }}>
                  There are {ajaxHook.list.filter(item => !item.complete).length} Items To Complete
                </Navbar>
              </Card.Title>
              <Card style={{ width: '80vw', flexDirection: 'row', marginTop: '0vh', borderRadius: '0rem' }} >
  
                <Card.Body>
                  <TodoForm handleSubmit={_addItem} />
                </Card.Body>
                <Card.Body>
  
                  <TodoList
                    list={ajaxHook.list}
                    handleComplete={_toggleComplete}
                    handleDelete ={_deleteTodoItems}
                  />
  
                </Card.Body>
              </Card>
  
            </div>
          </CardGroup>
  
        </section>
  
      </div>
    );
  } else return null;

};

export default ToDo;

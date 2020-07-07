import axios from 'axios';

import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// import './todo.scss';

const todoAPI = 'https://todo-app-server-lab32.herokuapp.com/api/v1/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();

    let config = {
      method: 'post',
      url: todoAPI,
      data: item,
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(config)
      .then(response => response.data)
      .then(savedItem => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};



    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      let config = {
        method: 'put',
        url: url,
        data: item,
        headers: { 'Content-Type': 'application/json' },
      };
      axios.request(config)
        .then(response => response.data)
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    };
  };

  const _getTodoItems = () => {
    let config = {
      method: 'get',
      url: todoAPI,
    };
    axios.request(config)
      .then(data => data.data)
      .then(data => {
        setList(data);
      })
      .catch(console.error);
  };
  const _deleteTodoItems = () => {
    let config = {
      method: 'delete',
      url: todoAPI,
      headers: { 'Content-Type': 'application/json' },
    };
    axios.request(config)
      .then(data => data.data)
      .then(data => {
        setList(data);
      })
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

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
                There are {list.filter(item => !item.complete).length} Items To Complete
              </Navbar>
            </Card.Title>
            <Card style={{ width: '80vw', flexDirection: 'row', marginTop: '0vh', borderRadius: '0rem' }} >

              <Card.Body>
                <TodoForm handleSubmit={_addItem} />
              </Card.Body>
              <Card.Body>

                <TodoList
                  list={list}
                  handleComplete={_toggleComplete}
                />

              </Card.Body>
            </Card>

          </div>
        </CardGroup>

      </section>

    </div>
  );

};

export default ToDo;

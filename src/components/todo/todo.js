import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



// import './todo.scss';

function ToDo(props) {

  const [todoList, setTodoList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setTodoList({ list: [...todoList.list, item] });
  };

  const toggleComplete = id => {

    let item = todoList.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = todoList.list.map(listItem => listItem._id === item._id ? item : listItem);
      setTodoList({ list });
    }

  };

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setTodoList({ list });
  }, []);

  if (todoList.list) {
    return (
      <div style={{ textAlign: 'center' }}>
        <header>
          <Navbar bg="primary" variant="dark" >
            <Nav className="mr-auto">
              <Nav.Link href="/" >Home</Nav.Link>
            </Nav>
          </Navbar>
        </header>

        <section className="todo" style={{ display: 'inline-block', marginTop:'2vh', textAlign: 'left' }} >
          <CardGroup >

            <div style={{ width: '80vw' }} >
              <Card.Title style={{ width: '80vw', marginBottom: '0vh'}}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{color:'white'}}>
                  There are {todoList.list.filter(item => !item.complete).length} Items To Complete
                </Navbar>
              </Card.Title>
              <Card style={{ width: '80vw', flexDirection: 'row', marginTop: '0vh', borderRadius: '0rem' }} >

                <Card.Body>
                  <TodoForm handleSubmit={addItem} />
                </Card.Body>
                <Card.Body>

                  <TodoList
                    list={todoList.list}
                    handleComplete={toggleComplete}
                  />

                </Card.Body>
              </Card>

            </div>
          </CardGroup>

        </section>

      </div>
    );

  } else {
    return null;
  }
}

export default ToDo;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TodoForm(props) {

  const [todoItem, setTodoItem] = useState({ text: {} });

  const handleInputChange = e => {
    setTodoItem({ text: { ...todoItem.text, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(todoItem.text);
    const text = {};
    setTodoItem({ text });
  };

  return (

    <>
      <Form onSubmit={handleSubmit}>
        <h3>Add Item</h3>

        <Form.Group >
          <Form.Label>
            To Do Item
            <Form.Control type="text" name="text" placeholder="Item Details" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>

        <Form.Group >
          <Form.Label>
            Assigned to
            <Form.Control type="text" placeholder="Assignee name" name="assignee" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicRangeCustom">
          <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group >
          <Button type="submit">Add Item</Button>
        </Form.Group>

      </Form>
    </>
    // <>
    //   <h3>Add Item</h3>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <span>To Do Item</span>
    //       <input
    //         name="text"
    //         placeholder="Add To Do List Item"
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <label>
    //       <span>Difficulty Rating</span>
    //       <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
    //     </label>
    //     <label>
    //       <span>Assigned To</span>
    //       <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
    //     </label>
    //     <button>Add Item</button>
    //   </form>
    // </>
  );
}

export default TodoForm;

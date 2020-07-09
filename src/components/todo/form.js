import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../../hooks/form-hook';


function TodoForm(props) {

  const textInput = useForm();
  const assigneeInput = useForm();
  const difficultyRange = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset(); // I don't know why its not working
    props.handleSubmit({text:textInput.value, assignee: assigneeInput.value, difficulty: difficultyRange.value});
  };

  return (

    <>
      <Form onSubmit={handleSubmit}>
        <h3>Add Item</h3>

        <Form.Group >
          <Form.Label>
            To Do Item
            <Form.Control type="text" name="text" placeholder="Item Details" {...textInput} />
          </Form.Label>
        </Form.Group>

        <Form.Group >
          <Form.Label>
            Assigned to
            <Form.Control type="text" name="assignee" placeholder="Assignee name" {...assigneeInput} />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicRangeCustom">
          <Form.Control type="range" custom  min="1" max="5" name="difficulty" {...difficultyRange} />
        </Form.Group>

        <Form.Group >
          <Button type="submit">Add Item</Button>
        </Form.Group>

      </Form>
    </>
  );
}

export default TodoForm;

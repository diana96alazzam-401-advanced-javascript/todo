import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





function TodoList(props) {
  console.log(props);
  if (props) {
    if (props.list) {
      return (
        <div>
          {props.list.map(item => (
            <Modal.Dialog
              variant={(item.complete)?'danger':'success'}
              className={`complete-${item.complete.toString()}`}
              key={item._id}
              onClick={() => props.handleComplete(item._id)}
            >
              <Modal.Header closeButton>
                <Button style={{marginRight:'3vw'}} className="rounded-pill" alt="150x75" variant={(item.complete)?'danger':'success'} >{(item.complete)?'complete':'pending'}</Button>
                <p>{item.assignee}</p>
              </Modal.Header>
              <Modal.Body>
                <p>{item.text}</p>
              </Modal.Body>
              <Modal.Footer>
                <p>Difficulty: {item.difficulty}</p>
              </Modal.Footer>

            </Modal.Dialog>
          ))}
        </div>
      );
    }
  } else {
    return null;
  }
}

export default TodoList;

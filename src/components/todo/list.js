import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// import Card from 'react-bootstrap/Card';



function TodoList(props) {
  if (props) {
    if (props.list) {
      return (
      // <>
      //   {props.list.map(item => (

      //     <Card
      //       border="primary"
      //       style={{ width: '18rem' }}
      //       className={`complete-${item.complete.toString()}`}
      //       key={item._id}
      //       onClick={() => props.handleComplete(item._id)}
      //     >

      //       <Card.Header>
      //         <Card.title className="rounded-pill" alt="150x75" variant={(item.complete)?'danger':'success'}>
      //         </Card.title>

      //       </Card.Header>
      //       <Card.Body>
      //         {item.text}
      //       </Card.Body>
      //     </Card>
      //   ))}
      // </>


        <ListGroup>
          {props.list.map(item => (
            <ListGroup.Item
              variant={(item.complete)?'danger':'success'}
              className={`complete-${item.complete.toString()}`}
              key={item._id}
              onClick={() => props.handleComplete(item._id)}
            >
              {item.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      );
    }
  } else {
    return null;
  }
}

export default TodoList;

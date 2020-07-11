import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


function PaginationFunction(props) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log((props.totalItems), (props.itemsPerPage));
  return (
    <Pagination>
      {pageNumbers.map(number => (
        <Pagination.Item key={number} onClick={()=>props.paginateHandler(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default PaginationFunction;
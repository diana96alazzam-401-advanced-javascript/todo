import React, {useState} from 'react';

export const SettingsContext = React.createContext();


function SettingsProvider (props) {

  const [completedVisibility, setCompletedVisibility] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerpage, setItemPerpage] = useState(3);
  const [sortField, setSortField] = useState('difficulty');
  const state = {
    completedVisibility, 
    changeCompletedVisibility: toggleCompVisibility,
    currentPage,
    setCurrentPage: paginateHandler,
    itemPerpage, 
    changeItemPerpage,
    sortField,
    changeNortField: setSortField,
  };
  function toggleCompVisibility() {
    let inversed = completedVisibility?false:true;
    setCompletedVisibility(inversed);
  }
  function changeItemPerpage(items) {
    setItemPerpage(items);
  }
  function paginateHandler(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
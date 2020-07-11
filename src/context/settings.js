import React, {useState} from 'react';

export const SettingsContext = React.createContext();


function SettingsProvider (props) {

  const [completedVisibility, setCompletedVisibility] = useState(true);
  const [numOfDisplayedItems, setNumOfDisplayedItems] = useState(3);
  const [sortField, setSortField] = useState('difficulty');
  const state = {
    completedVisibility, 
    changeCompletedVisibility: toggleCompVisibility,
    numOfDisplayedItems, 
    changeNumOfDisplayedItems: setNumOfDisplayedItems,
    sortField,
    changeNortField: setSortField,
  };
  function toggleCompVisibility() {
    let inversed = completedVisibility?false:true;
    setCompletedVisibility(inversed);
  }
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
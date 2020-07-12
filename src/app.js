import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';

import SettingsProvider from './context/settings.js';



export default function App() {
  return (
    <SettingsProvider>
      <ToDo />
    </SettingsProvider>
  );
}

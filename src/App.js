import './App.css';
import React from 'react';
import { TodoItem } from './componets/items/TodoItem';
import { TodoTitle } from './componets/TodoTitle';
import { TodoList } from './componets/TodoList';
import { TodoSearch } from './componets/TodoSearch';
import { TodoCount } from './componets/TodoCount';
import { VideoLoop } from './componets/icons/VideoBackGround';

const defaultTodos = [
    { text: 'Expale 1', value: 'Value Example 1' },
    { text: 'Expale 2', value: 'Value Example 2' },
    { text: 'Expale 3', value: 'Value Example 3' },
    { text: 'Expale 4', value: 'Value Example 5' },
    { text: 'Expale 4', value: 'Value Example 6' },
];

function App() {
 
  const [search, setSearch] = React.useState('')
 console.log((search))
  return (
        <>
            <VideoLoop/>
            <TodoTitle />
            <TodoSearch setValue={setSearch}/>
            <TodoCount hechas={''} total={''} />
            <TodoList>
                {defaultTodos
                .filter((item)=> item.text.toLowerCase === search.toLowerCase)
                .map(item => (
                  <TodoItem
                  key={item.text}
                  text={item.text}
                  />
                ))}
            </TodoList>
        </>
    );
}

export default App;
import './App.css';
import React from 'react';
import { TodoItem } from './componets/items/TodoItem';
import { TodoTitle } from './componets/TodoTitle';
import { TodoList } from './componets/TodoList';
import { TodoSearch } from './componets/TodoSearch';
import { TodoCount } from './componets/TodoCount';
import { VideoLoop } from './componets/icons/VideoBackGround';

const defaultTodos = [
    { text: 'para', completed: false },
    { text: 'mi', completed: false },
    { text: 'mama', completed: false },
    { text: 'bonita', completed: false },
    { text: 'la amo', completed: true },
];

function App() {

    const [todos, setTodos] = React.useState(defaultTodos);
    const [search, setSearch] = React.useState('');
    const completedTodos = todos.filter((item) => item.completed).length;
    const totalTodos = todos.length;

    const searched = todos.filter((item) => item.text.toLowerCase().includes(search.toLoaleLowerCase()))

    return (
        <>
            <VideoLoop />
            <TodoTitle />
            <TodoSearch setValue={setSearch} />
            <TodoCount completed={completedTodos} total={totalTodos} />
            <TodoList>
                {todos.length == 0 ?
                    searched
                        .map((item) => (
                            <TodoItem
                                key={item.text}
                                text={item.text}
                                completed={item.completed}
                            />

                        ))
                    :
                    <p className='text-slate-300 animate-pulse text-center text-3xl font-semibold '>No hay nada por aqui...</p>
                }
            </TodoList>
        </>
    );
}

export default App;

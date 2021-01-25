import React, {useState} from 'react'
import Todo from './todo';
import Todoform from './todoform';

function Todolist() {

    const [todos, settodos] = useState([]);


    const addTodo = todo => {

        if(!todo.text || /^\s$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        settodos(newTodos);
    }

    const updateTodo = (ID,newValue) => {
        if(!newValue.text || /^\s$/.test(newValue.text))
        {
            return;
        }

        settodos(prev => prev.map(item => (item.id === ID ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !==id)

        settodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id)
            {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        settodos(updatedTodos);
    }
    return (
        <div>
            <h1>What is your plan for today?</h1>
            <Todoform onSubmit={addTodo}/>
            <Todo 
                todos = {todos}
                completeTodo = {completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />           
        </div>
    )
}

export default Todolist;

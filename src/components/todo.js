import React, {useState} from 'react'

import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Todoform from './todoform';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setedit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setedit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <Todoform edit={edit} onSubmit={submitUpdate} />
    }

    let newTodos = todos.map((todo,index)=>{
        return <div className={todo.isComplete ? "todo-row complete" : 'todo-row'} key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={()=>{ removeTodo(todo.id)}}
                    className="delete-icon"
                />
                <TiEdit 
                    onClick={()=> setedit({ id: todo.id, value: todo.text})}
                    className="edit-icon"
                />
            </div>
        </div>
    });

    return newTodos;
}

export default Todo

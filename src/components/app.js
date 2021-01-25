import React, {Component} from 'react'
import Todolist from './todolist';

import "../css/app.css"

class App extends Component{
    render(){
        return(
        <div className='todo-app'>
            <Todolist />
        </div>
        )
    }
}

export default App;
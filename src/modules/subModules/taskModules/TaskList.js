import React from 'react';
import TaskAdder from '../taskModules/TaskAdder';

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tasks: [],
        };
    }
    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.tasks.length > 0 ? this.state.tasks : "No tasks currently in list"}</li>
                </ul>
                <TaskAdder tasks={this.state.tasks}/>
            </div>
        )
        }
}

export default TaskList;
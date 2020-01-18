import React from 'react';
import Task from './Task';
class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tasks: props.taskArray,
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    render(){
        return(
            <div>
                <Task taskList={this.state.tasks}/>
            </div>
        )
    }

    handleAddTask = (val) => {
            let t = this.state.tasks;
            if (val != null && val !== ""){
                t.push(val);
                this.setState({tasks: t});
            }
            console.log(this.state.tasks);
        }
    }

export default TaskList;
import React from 'react';
import Task from '../taskModules/Task';
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            taskText: null,
            tasks: []
        };
        this.taskTextBoxHandler = this.taskTextBoxHandler.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    render(){
        return(
            <div className="taskAdder">
                <Task taskList={this.state.tasks}/>
                <label className="taskAdderSpacing">Task:</label>
                <input 
                    className="taskAdderSpacing"
                    name="taskTextBox"
                    onChange={this.taskTextBoxHandler}   
                 />
                <button 
                    className="taskAdderSpacing"
                    type="button"
                    onClick={this.handleAddTask}
                >
                Add Task
                </button>
            </div>
        )
    }
    taskTextBoxHandler(e){
        this.setState({taskText: e.target.value});
    }
    handleAddTask(){
        let t = this.state.tasks;
        if (this.state.taskText != null || this.state.taskText !== ""){
            t.push(this.state.taskText);
            this.setState({tasks: t});
        }
        console.log(this.state.tasks);
    }
}

export default Body;
import React from 'react';
class TaskAdder extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            taskText: null
        }
        this.taskTextBoxHandler = this.taskTextBoxHandler.bind(this);
    }
    render(){
        return(
            <div className="taskAdder">
                <label className="taskAdderSpacing">Task:</label>
                <input 
                    className="taskAdderSpacing"
                    name="taskTextBox"
                    onBlur={() => this.taskTextBoxHandler}   
                 />
                <button 
                    className="taskAdderSpacing"
                    type="button"
                    onClick={this.props.handler(this.state.taskText)}
                >
                Add Task
                </button>
            </div>
        )
    }
    taskTextBoxHandler({target}){
        const val = target.value;
        this.setState({taskText: val});
    }
}

export default TaskAdder;
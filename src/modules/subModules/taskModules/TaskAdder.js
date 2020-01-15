import React from 'react';
class TaskAdder extends React.Component{
    constructor(props){
        super(props);
        this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
    }
    render(){
        return(
            <div className="taskAdder">
                <label className="taskAdderSpacing">Task:</label>
                <input className="taskAdderSpacing"/>
                <button 
                    className="taskAdderSpacing"
                    onClick={this.handleAddTaskClick}
                >
                Add Task
                </button>
            </div>
        )
    }

    handleAddTaskClick(){
        this.props.tasks.
    }
}

export default TaskAdder;
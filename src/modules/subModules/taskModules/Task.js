import React from 'react';
import TaskItem from './TaskItem';
class Task extends React.Component{
    render() {
        const taskList = this.props.taskList;
        let items = "No current tasks";
        if (taskList != null && taskList[0] != null){
            items = taskList.map((item) =>
            <li><TaskItem item={item}/></li>
            );
        }
        
        return(
            <ul>{items}</ul>
        );
    }
}
export default Task;
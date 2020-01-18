import React from 'react';

class TaskItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            itemName: props.item,
            timeElapsed: 0,
            totalTime: "0:00",
            startTime: null,
        };
        this.StartTimerClick = this.StartTimerClick.bind(this);
        this.LogTimeDifference = this.LogTimeDifference.bind(this);
    }
    render(){
        return(
            <div>
                {this.state.itemName}
                <button
                    onClick={this.StartTimerClick}>
                    timer
                </button>
                <label>{this.state.totalTime}</label>
            </div>
        );
    }
    onComponentDidMount(){

    }
    StartTimerClick(){
        this.setState({startTime: new Date()})
        console.log("start time:" + this.state.startTime);
        setInterval(this.LogTimeDifference, 1000);
    }
    LogTimeDifference(){
        let now = new Date() - this.state.startTime;
        now = Math.floor(now /1000);
        console.log("Time Passed:" + now);
        let hours = null;
        let minutes = null;
        let seconds = null;
        hours = Math.floor(now/3600);
        now = now - hours * 3600;
        minutes = Math.floor(now/60);
        seconds = now - minutes * 60;
        let timeSpent = "Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
        this.setState({totalTime: timeSpent});
    }
}
export default TaskItem;
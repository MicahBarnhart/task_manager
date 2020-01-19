import React from 'react';

class TaskItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            itemName: props.item,
            timeElapsed: 0,
            totalTime: "0:00",
            startTime: null,
            interval: null,
        };
        this.StartTimerClick = this.StartTimerClick.bind(this);
        this.StopTimerClick = this.StopTimerClick.bind(this);
        this.LogTimeDifference = this.LogTimeDifference.bind(this);
    }
    render(){
        return(
            <div >
                <label className="taskAdderSpacing">{this.state.itemName}</label>
                <button className="taskAdderSpacing"
                    onClick={this.StartTimerClick}>
                    Start Timer
                </button>
                <button className="taskAdderSpacing" onClick={this.StopTimerClick}>
                    Stop Timer
                </button>
                <label className="taskAdderSpacing">{this.state.totalTime}</label>
            </div>
        );
    }
    onComponentDidMount(){

    }
    StartTimerClick(){
        if (this.state.startTime == null)
            this.setState({startTime: new Date()})
        else
            this.setState({startTime: (new Date() - this.state.startTime)});
        //console.log("start time:" + this.state.startTime);
        this.setState({interval: setInterval(this.LogTimeDifference, 1000)});
    }
    StopTimerClick(){
        let now = new Date();
        this.setState({timeElapsed: (now - this.state.startTime)});
        clearInterval(this.state.interval);
    }
    LogTimeDifference(){
        let now = new Date() - this.state.startTime;
        now = Math.floor(now /1000);
        //console.log("Time Passed:" + now);
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
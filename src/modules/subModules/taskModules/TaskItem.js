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
            timerToggle: "Not Running"
        };
        this.TimerButtonClick = this.TimerButtonClick.bind(this);
        this.LogTimeDifference = this.LogTimeDifference.bind(this);
    }
    render(){
        return(
            <div >
                <label className="taskAdderSpacing">{this.state.itemName}</label>
                <button id="timerButton" className="taskAdderSpacing"
                    onClick={this.TimerButtonClick}>
                    Start Timer
                </button>
                <label className="taskAdderSpacing">Timer is: {this.state.timerToggle}</label>
                <label className="taskAdderSpacing">{this.state.totalTime}</label>
            </div>
        );
    }
    onComponentDidMount(){

    }
    TimerButtonClick(){
        if (this.state.timerToggle === "Not Running"){
            if (this.state.startTime == null){
                let now = new Date();
                this.setState({startTime: now})
                //console.log("Start time: " + now / 1000);
            }
            else{
                let now = new Date().setMilliseconds(-this.state.timeElapsed * 1000);
                this.setState({startTime: now});
                //console.log("Start time now: " + now / 1000);
            }
            //console.log("Total time when started: " + this.state.startTime);
            //console.log("start time:" + this.state.startTime);
            this.setState({interval: setInterval(this.LogTimeDifference, 1000), timerToggle: "Running"});
            document.getElementById("timerButton").innerHTML = "Stop Timer";
        }
        else{
            let now = new Date();
            let total = Math.floor((now - this.state.startTime) / 1000);
            //console.log("Total time when stopped: " + total);
            this.setState({timeElapsed: total, timerToggle: "Not Running"});
            clearInterval(this.state.interval);
            document.getElementById("timerButton").innerHTML = "Start Timer";
        }
        
    }
    LogTimeDifference(){
        let now = new Date() - this.state.startTime;
        now = Math.floor(now /1000);
        //console.log("Time Passed:" + now);
        let hours = Math.floor(now / 3600);
        let remainder = Math.floor(now % 3600);
        let minutes = Math.floor(remainder / 60);
        let seconds = Math.floor(remainder % 60);

        let timeSpent = "Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
        this.setState({totalTime: timeSpent});
    }
}
export default TaskItem;
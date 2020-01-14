// Footer Component
import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date().getFullYear(),
            name: props.name
        };
    }
    render(){
        return(
            <div className="footer">
                <p>&copy;{this.state.date} {this.state.name}</p>
            </div>
        )
    }
}

export default Footer;
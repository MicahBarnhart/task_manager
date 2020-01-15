import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';

class Page extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Body/>
            <Footer name="Micah Barnhart" />
            </div>
        )
    }
}

export default Page;
import React, {Component} from 'react';
import Header from "../component/Header";
import Naviagator from "../component/Naviagator";
import Footer from "../component/Footer";


class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Naviagator/>
                Home
                <Footer/>

            </div>
        )
    }
}

export default Home;

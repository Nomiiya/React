import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/layout/Header';


class Home extends React.Component{
    render(){
        return (
            <Router>
            <div>
                <div className="container">
                    <Header />
                    <Route exact path="/" render = {props => (
                        <React.Fragment>
                            <p>Hello</p> 
                        </React.Fragment>
                    )} />
                </div>
            </div>
            </Router>
        );
    }
}

ReactDOM.render(
        <Home />, 
        document.getElementById('root')
);
serviceWorker.unregister();
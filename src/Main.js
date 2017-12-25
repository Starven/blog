import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components

import Home from './Home';
import Posts from './Posts';
import HeadingNav from './heading-nav';
import FooterNav from './footer-nav';
import Editor from './Editor';

class Main extends Component{
    render(){
        return(
            <main>
                <Router>
                    <div className="autoHeight">
                    <HeadingNav title="Steven Star"
                    subHeading="Full Stack Web Development/Music/Games"/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/editor" component={Editor}/>
                    <div>
                        <FooterNav />
                    </div>
                    
                    </div>
                </Router>
            </main>
        )
    }
}

export default Main;
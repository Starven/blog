import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HeadingNav extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
                <div className="heading-top" id="heading">
                        <Link to="/"><h1>{this.props.title}</h1></Link>
                        <Link to="/about"><div className="navButton">
                            <h3>About</h3>
                        </div></Link>
                        <Link to="/posts"><div className="navButton">
                            <h3>Posts</h3>
                        </div></Link>
                 </div>
            
        )
    }
}


window.addEventListener('scroll', function(){
    
    if (document.getElementById("heading")){
        let heading = document.getElementById("heading");
        console.log(document.scrollingElement.scrollTop);
        if (heading.classList.contains('heading-top') && document.scrollingElement.scrollTop > 0){
            heading.classList.add('heading-scrolled');
            heading.classList.remove('heading-top');
            
        }
        else if(heading.classList.contains('heading-scrolled') && document.scrollingElement.scrollTop == 0){
            heading.classList.add('heading-top');
            heading.classList.remove('heading-scrolled'); 
        }
    }
})

export default withRouter(HeadingNav);
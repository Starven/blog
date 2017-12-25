import React, {Component} from 'react';

import SquareLink from './squareLink';

class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            postList: [
                {name: "This Blog",
                desc: "Detailing the development of this very blog.",
                img: "http://i0.kym-cdn.com/photos/images/facebook/001/035/662/ecc.jpg"},
                {name: "Willies",
                desc: "this is a butt",
                img: "http://i0.kym-cdn.com/photos/images/facebook/001/035/662/ecc.jpg"},
                {name: "Johnnies",
                desc: "this is a butt",
                img: "http://i0.kym-cdn.com/photos/images/facebook/001/035/662/ecc.jpg"},
                {name: "Ribbity",
                desc: "this is a butt",
                img: "http://i0.kym-cdn.com/photos/images/facebook/001/035/662/ecc.jpg"},
            ]
        };
    }
    render(){
        var posts = this.state.postList.map(function(n, index){
            console.log("ind: " + index, "n: " + n);
            return <SquareLink key={index} name={n.name} desc={n.desc} img={n.img}/>;
        })
        return(
            <div>
            <h1>Latest Blog Posts</h1>
            <div>{posts}</div>
            </div>
        )
    }
}

export default Posts;
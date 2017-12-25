import React, {Component} from 'react';

class PostPrev extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            <div className="postPrev">
                <div className="postPrevHeading">
                    <img src={this.props.hImg} />
                    
                </div>
                <div className="diamondboy">
                    <img src={this.props.cat}/>
                </div>
                <h1>{this.props.title}</h1>
                <div className="postPrevBody">
                    <p>{this.props.body}</p>
                </div>
                
            </div>
            <div className="postPrevFooter">
                <div className="interactions">
                    <div className="FBLike butt"></div>
                    <div className="TwitterLike butt"></div>
                    <div className="Comments"><p>0 Comments</p></div>
                    <div className="DatePosted"><p>Posted 12/12/12</p></div>
                </div>
            </div>
            </div>
        )
    }
}

export default PostPrev;
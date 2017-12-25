import React, {Component} from 'react';

class SquareLink extends Component{
    render(){
        return (
            <div className="squareLink">
                <div className="squareLinkTop">
                    <h2>{this.props.name}</h2>
                </div>
                <div>
                    <div className="squareLinkImage">
                        <img src={this.props.img} />
                    </div>
                    
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default SquareLink;
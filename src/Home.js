import React, { Component } from 'react';
import SquareLink from './squareLink';
import {Link} from 'react-router-dom';

import PostPrev from './PostPrev';
import PostEditor from './PostEditor';

var animatedTexts = ["< Web Developer />", "Game Developer();", "Musician"];
var anim_text = "";
var count = 0;
var animtextcount = 0;
class Home extends Component{
    constructor(props){
        super(props);
        //updateText = updateText.bind(this);
        this.updoot = this.updoot.bind(this);
            this.state = {
                aboutMeImg: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/529372_10151010798596702_683799948_n.jpg?oh=a035c43150f0903278684a72c98a88d2&oe=5AC40517",
                postsImg: "https://cdn4.iconfinder.com/data/icons/web-pages-seo/512/59-512.png",
                animText: "",
                postList: [{
                    title: "Test Title",
                    img: 'assets/melb.png',
                    body: 'Hey boyfriends\n' + "\n" + 'Yoo',
                    cat: 'https://image.freepik.com/free-icon/code_318-41701.jpg'
                }]
                
            };

            
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.updoot(),
          50
        );
      }

    updoot(){
        let new_array = animatedTexts[animtextcount].split("");
        if (count < new_array.length && animtextcount == 0){
            let new_string = this.state.animText += new_array[count];
            this.setState({
                animText: new_string
            })
            
        }
        else if(count > new_array.length + 13 && animtextcount == 0){
            animtextcount = 1;
            count = -1;
            this.setState({
                animText: ""
            })
        }
        else if (count < new_array.length && animtextcount == 1){
            let new_string = this.state.animText += new_array[count];
            this.setState({
                animText: new_string
            })
            
        }
        else if(count > new_array.length + 13 && animtextcount == 1){
            animtextcount = 2;
            count = -1;
            this.setState({
                animText: ""
            })
        }

        else if (count < new_array.length && animtextcount == 2){
            let new_string = this.state.animText += new_array[count];
            this.setState({
                animText: new_string
            })
            
        }
        else if(count > new_array.length + 13 && animtextcount == 2){
            animtextcount = 0;
            count = -1;
            this.setState({
                animText: ""
            })
        }
        count++;
        
    }

    //setInterval(updoot, 1000);

    render(){
        return(
            <div>
                <div className="homeBanner">
                    <h2 id="static_text">Melbourne Based</h2>
                   <h2 id="anim_text">{this.state.animText}</h2>
                </div>
                <div className="content-container">
                    <div className="contentBanner">
                        <div className="contentBannerSquares">
                            <h4 className="searchtext">Search: </h4>
                            <input className="search-bar" type='text' placeholder="Search Posts by Title or Tag" />
                            
                            <div className="squareIcon">
                                <img src="https://image.freepik.com/free-icon/code_318-41701.jpg" />
                            </div>
                            <div className="squareIcon">
                                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/23385-200.png" />
                            </div>
                            <div className="squareIcon">
                                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/3191-200.png" />
                            </div>
                            <h4 className="filtertext">Filter by Category: </h4>
                        </div>
                    </div>
                    <div className="content">

        {/*} <PostPrev title={this.state.postList[0].title}
                            hImg={this.state.postList[0].img}
                            body={this.state.postList[0].body}
                            cat={this.state.postList[0].cat} />
                        <PostPrev title={this.state.postList[0].title}
                            hImg={this.state.postList[0].img}
        body={this.state.postList[0].body}
        cat={this.state.postList[0].cat} />*/}
        <PostEditor />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;
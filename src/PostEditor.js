import React, {Component} from 'react';
import './EditorClasses';

import SquareLink from './squareLink';


var page_list = [];
var onPage = 1;
var pageIDs = ["page1", "page2", "page3", "page4", "page5"];
var pageData = [];

var pageGallery = [];
var selected_image = "";

class PostEditor extends Component{
    constructor(props){
        super(props);

        page_list.push(new NewPage(onPage, ""));
        page_list.push(new NewPage(onPage+1, ""));
        page_list.push(new NewPage(onPage+2, ""));
        page_list.push(new NewPage(onPage+3, ""));
        page_list.push(new NewPage(onPage+4, ""));

        pageData.push();

        this.state = {
          page_data: [],
          page_gallery: [],
          selectedImage: ""
        };

        this.toggleEditor = this.toggleEditor.bind(this);
        this.setPage = this.setPage.bind(this);
        this.updateText = this.updateText.bind(this);
        returnGallery = returnGallery.bind(this);
        showGallery = showGallery.bind(this);
        
    }
    toggleEditor(e){
        console.log(e.target.id);
        let editor = document.getElementById('editcontent');
        let prev = document.getElementById('prevcontent');
        if(e.target.id == 'editor'){
            editor.style.display = "block";
            prev.style.display = "none";
        }else{
            editor.style.display = "none";
            prev.style.display = "block";
            this.updateText(prev, editor, "none");
        }
        
        console.log("toggling");
    }


    setPage(page){


      let editor = document.getElementById('editcontent');
      let prev = document.getElementById('prevcontent');
      this.updateText(prev, editor, "none");
      
      onPage = document.getElementById(page.target.id).innerHTML;
      console.log("state page: " + onPage);
      editor.textContent = page_list[onPage-1].content;
      console.log("HUEGE: " + document.getElementById(page.target.id).innerHTML);
      this.updateText(prev, editor, "none");

      for (let pc=0;pc<pageIDs.length;pc++){
        let newElem = document.getElementById(pageIDs[onPage-1]);
        let otherElem = document.getElementById(pageIDs[pc]);
        if (newElem.id == pageIDs[onPage-1]){
          if (newElem.classList.contains('p-unselected')){
            newElem.classList.remove('p-unselected');
            newElem.classList.add('p-selected');
          }
        }
        else{
          if (newElem.classList.contains('p-selected')){
            newElem.classList.remove('p-selected');
            newElem.classList.add('p-unselected');
          }
        }
        if (otherElem.id == pageIDs[pc] && otherElem.id != pageIDs[onPage-1]){
          if (otherElem.classList.contains('p-selected')){
            otherElem.classList.remove('p-selected');
            otherElem.classList.add('p-unselected');
          }
        }
        
      }

      formatEditor(editor);
    }

    

    

    updateText = (textPrev, text, TagType) => {
      var tf = "";
          textPrev.textContent = tf;
          TagType ="none";
          //document.getElementById("editcontent").innerHTML = text;

      let text_array = text.textContent.split("~");
      let new_arr = flattenTextArray(text_array);
      console.log("new: " + new_arr);
      console.log(text_array);
      let add = true;
      
      for (let i=0;i<new_arr.length;i++){
        //set next Tag
        add = true;
        console.log("Text: " + new_arr[i] + "Tag: " + TagType);
        
        if (new_arr[i] == "{title}"){
          add = false;
          if (TagType == "none"){
            TagType = "title";
          }
          else if(TagType == "title"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{subtitle}"){
          add = false;
          if (TagType == "none"){
            TagType = "subtitle";
          }
          else if(TagType == "subtitle"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{caption}"){
          add = false;
          if (TagType == "none"){
            TagType = "caption";
          }
          else if(TagType == "caption"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{code}"){
          add = false;
          if (TagType == "none"){
            TagType = "code";
          }
          else if(TagType == "code"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{quote}"){
          add = false;
          if (TagType == "none"){
            TagType = "quote";
          }
          else if(TagType == "quote"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{link}"){
          add = false;
          if (TagType == "none"){
            TagType = "link";
          }
          else if(TagType == "quote"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{image-link}"){
          add = false;
          if (TagType == "none"){
            TagType = "image-link";
          }
          else if(TagType == "quote"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{img}"){
          add = false;
          if (TagType == "none"){
            TagType = "image";
          }
          else if(TagType == "image"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{youtube}"){
          add = false;
          if (TagType == "none"){
            TagType = "youtube";
          }
          else if(TagType == "youtube"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{squareLink}"){
          add = false;
          if (TagType == "none"){
            TagType = "squarelink";
          }
          else if(TagType == "squarelink"){
            TagType = "none";
          }
        }
        if (new_arr[i] == "{image-gallery}"){
          add = false;
          if (TagType == "none"){
            TagType = "image-gallery";
          }
          else if(TagType == "image-gallery"){
            TagType = "none";
          }
        }
        else if (new_arr[i] == "{br}"){
          add = false;
          //textPrev.innerHTML += document.createElement('p');
          //textPrev.appendChild(document.createElement('p'));
          TagType = "none";
          //tf += "\n";
        }
        if (add){
          console.log("yesplease");
          if (TagType == "none"){
            //tf += " " + returnText(text_array[i], text);
            pageData.push(returnText(new_arr[i], text));
            console.log("Data: " + pageData[0]);
           // textPrev.appendChild(node);
          }
          else if(TagType == "title"){
            pageData.push(returnTitle(new_arr[i], text));
           // textPrev.appendChild(node);
          }
          else if(TagType == "subtitle"){
            pageData.push(returnSubtitle(new_arr[i], text));
           // textPrev.appendChild(node);
          }
          else if(TagType == "caption"){
            pageData.push(returnCaption(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "code"){
            pageData.push(returnCode(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "quote"){
            pageData.push(returnQuote(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "image"){
            pageData.push(returnImage(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "squarelink"){
            pageData.push(returnSquareLink(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "link"){
            pageData.push(returnLink(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "image-link"){
            pageData.push(returnImageLink(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "youtube"){
            pageData.push(returnYouTube(new_arr[i], text));
            //textPrev.appendChild(node);
          }
          else if(TagType == "image-gallery"){
            pageData.push(returnGallery(new_arr[i]));
            //textPrev.appendChild(node);
          }
        }
        
      }
      this.setState({
        page_data: pageData
      });
      page_list[onPage-1].content = text.textContent;
        //textPrev.textContent = tf;
      
    }

    
    render(){
        var post = this.state.page_data.map(function(o, index){
          console.log("PG: " + o);
          return o;
        })
        var images_row = this.state.page_gallery.map(function(img, index){
          console.log("HEEEY");
          return <img id={index} className="gal-thumb" src={img} onClick={showGallery}/>;
        })
        return (
            <div>
                <div id="gallery" className="image-gallery-hidden">
                  <div className="image-gallery-top"><h2 onClick={hideGallery}>X</h2></div>
                  <div className="image-gallery-sel">
                    <img src={this.state.selected_image}/>
                  </div>
                  <div className="image-gallery-roll">
                    {images_row}
                  </div>
                </div>
                <div className="p-editor-container">
                    <div className="p-editor-top">
                        <div className="tag" id="editor" onClick={this.toggleEditor}>Editor</div>
                        <div className="tag" id="prev" onClick={this.toggleEditor}>Preview</div>
                    </div>
                    <div className="pages">
                        <div className="page p-selected" id="page1" onClick={this.setPage}>1</div>
                        <div className="page p-unselected" id="page2" onClick={this.setPage}>2</div>
                        <div className="page p-unselected" id="page3" onClick={this.setPage}>3</div>
                        <div className="page p-unselected" id="page4" onClick={this.setPage}>4</div>
                        <div className="page p-unselected" id="page5" onClick={this.setPage}>5</div>
                    </div>
                        <div className="edit-content" id="editcontent" contentEditable></div>
                        <div className="prev-content" id="prevcontent">{post}</div>
                </div>
            </div>
        )
    }
}

/*document.addEventListener("keypress", function(e){
  console.log(e.keyCode);
  if (e.keyCode == 32){
    formatEditor(document.getElementById("editcontent"));
    setEndOfContenteditable(document.getElementById("editcontent"));
    //document.getElementById("editcontent").focus
  }
  
})

function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}*/

function formatEditor(text){
  let arr = text.innerHTML.split("");
  console.log("ARR LENGTH: " + arr.length);
  console.log("ARR: " + arr);
  for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log("I BEFORE: " + i);
    let below = i-1;
    let above = i+1;
    if (arr[i] == "~"){
      if (i >= 0){
        if (arr[above]){
          if (arr[above] == "{"){
            if (arr[below] && !arr[below] != "<br/><span class='text-highlight'>"){
              
              arr.splice(i, 0, "<br/><span class='text-highlight'>");
              i++;
              console.log("BUTTS: " + i);
            }
            else if(i == 0){
              arr.splice(i, 0, "<br/><span class='text-highlight'>");
              i++;
            }
          }
        }
        if (arr[below]){
          if (arr[below] == "}"){
            if (arr[above] && !arr[above] != "</span><br/>"){
              arr.splice(above, 0, "</span><br/>");
              i++;
            }
          }
        }
      }
    }
  }

  console.log(arr);
  
  //end first for loop
  let newstring = "";
  for (let i=0;i<arr.length;i++){
    newstring += arr[i];
  }

  text.innerHTML = newstring;



}

function showGallery(e){
  console.log(document.getElementById(e.target.id).src);
  this.setState({
    selected_image: document.getElementById(e.target.id).src
  })
  let gallery = document.getElementById("gallery");
  gallery.classList.remove('image-gallery-hidden');
  gallery.classList.add('image-gallery-show');
}

function hideGallery(e){
  let gallery = document.getElementById("gallery");
  gallery.classList.add('image-gallery-hidden');
  gallery.classList.remove('image-gallery-show');
}

function returnTitle(substring, textbody){
    
    return <h1>{substring}</h1>;
  }

  function returnSubtitle(substring, textbody){
    
    return <h3>{substring}</h3>;
  }

  function NewPage(i, content){
    this.id = i;
    this.content = content;
  }
  
  function returnText(substring, textbody){
    /*let t = document.createTextNode(substring);
    return t;*/
    return <p>{substring}</p>;
  }
  function returnCaption(substring, textbody){
    return <p class="caption">{substring}</p>;
  }

  function returnCode(substring, textbody){
    let new_array = substring.split("\\");
    var code = new_array.map(function(o, index){
      if (o == "t"){
        return "\t";
      }
      else{
        return o + "\n";
      }
      
    })
    return <div class="code"><code>{code}</code></div>;
  }

  function returnGallery(substring){
    let new_array = substring.split("|");
    var images = new_array.map(function(img, index){
      return <img id={index} className="gal-thumb" src={img} onClick={showGallery}/>;
    })
    this.setState({
      page_gallery: new_array
    });
    return <div className="gallery">{images}</div>;
  }

  function returnYouTube(substring, textbody){
    return <iframe width="720" height="480" 
    src={substring} frameborder="0" 
    gesture="media" allow="encrypted-media" allowfullscreen></iframe>;
  }
  function returnLink(substring, textbody){
    let new_array = substring.split("|");
    if (new_array.length > 1){
      let link_url = new_array[0];
      let link_text = new_array[1];
      link_url = "http://" + link_url;
      return <a href={link_url}><p>{link_text}</p></a>;
    }
  }
  function returnImageLink(substring, textbody){
    let new_array = substring.split("|");
    if (new_array.length > 1){
      let link_url = new_array[0];
      let link_image = new_array[1];
      link_url = "http://" + link_url;
      return <a href={link_url}><img src={link_image} /></a>;
    }
  }

  function returnQuote(substring, textbody){
    return <div class="quote"><h2>{substring}</h2></div>;
  }
  
  function returnImage(substring, textbody){
    return <img src={substring}/>;
  }

  function returnSquareLink(substring, textbody){
    return <SquareLink name={substring} />;
  }
  
  function flattenTextArray(arr){
  
    let new_array = [];
    let new_string = "";
    for (let a=0;a<arr.length;a++){
      if (arr[a] == "{title}" || arr[a] == "{br}" || arr[a] == "{img}"
       || arr[a] == "{subtitle}" || arr[a] == "{caption}" || arr[a] == "{squareLink}"
      || arr[a] == "{quote}" || arr[a] == "{link}" || arr[a] == "{image-link}" ||
         arr[a] == "{youtube}" || arr[a] == "{code}" || arr[a] == "{image-gallery}"){
        if (new_string.length > 0){
          new_array.push(new_string);
        }
        new_array.push(arr[a]);
        new_string = "";
      }
      else{
        new_string += arr[a] + " ";
      }
      if (a == arr.length-1){
        new_array.push(new_string);
      }
    }
    
    console.log(new_array);
    return new_array;
  }
  



export default PostEditor;

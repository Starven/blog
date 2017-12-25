function returnTitle(substring, textbody){
  let h = document.createElement("H1");
  let b = document.createTextNode(substring);
  h.appendChild(b);

 // textbody.innerHTML += h;
  
  return h;
}

function returnText(substring, textbody){
  let t = document.createTextNode(substring);
  return t;
}

function returnImage(substring, textbody){
  let img = document.createElement("img");
  img.setAttribute('src', substring);
  return img;
}

function flattenTextArray(arr){

  let new_array = [];
  let new_string = "";
  for (let a=0;a<arr.length;a++){
    if (arr[a] == "{title}" || arr[a] == "{br}" || arr[a] == "{img}"){
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


function updateText(textPrev, text, TagType){
  var tf = "";
      textPrev.textContent = tf;
      TagType ="none";
    text.innerHTML.replace(/{title}/g," {title} ");
    text.innerHTML.replace(/{br}/g," {br} ");
    text.innerHTML.replace(/{br}/g," {br} ");
    text.innerHTML.replace(/{img}/g," {img} ");

    let text_array = text.textContent.split(";");
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
    if (new_arr[i] == "{img}"){
      add = false;
      if (TagType == "none"){
        TagType = "image";
      }
      else if(TagType == "image"){
        TagType = "none";
      }
    }
    else if (new_arr[i] == "{br}"){
      add = false;
      //textPrev.innerHTML += document.createElement('p');
      textPrev.appendChild(document.createElement('p'));
      TagType = "none";
      //tf += "\n";
    }
    if (add){
      console.log("yesplease");
      if (TagType == "none"){
        //tf += " " + returnText(text_array[i], text);
        let node = returnText(new_arr[i], text);
        textPrev.appendChild(node);
      }
      else if(TagType == "title"){
        let node = returnTitle(new_arr[i], text);
        textPrev.appendChild(node);
      }
      else if(TagType == "image"){
        let node = returnImage(new_arr[i], text);
        textPrev.appendChild(node);
      }
    }
    
  }
    //textPrev.textContent = tf;
  
}
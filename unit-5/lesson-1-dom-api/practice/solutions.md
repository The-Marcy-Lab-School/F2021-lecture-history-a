## The DOM API and editing

1. Compare and contrast a NodeList and an HTMLCollection?
   _Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. Also, we can only run the forEach method on a NodeList. Finally, neither of these are actually arrays. So neither can use other array methods such as pop. push, shift, unshift, etc._ 

2. Write the output of the console.log() statement. Briefly explain your reasoning for writing this output. 
    _"Jessie Woolley-Wilson" would be logged to the console. This text is the innerText of the `<h2>` element that has an idea of "ceo"_


3. Read the sample html code below. Describe what will happen when `myFunction()` is invoked.
    _When myFunction is involed, the DOM will be queried to find an element with a selector of example. The `querySelector` method returns the first element with the specifed selector. In this case, that element is the `<h2>`.The style of this element will then be changed to have the background color of red._ 


4. 
  ```javascript
  const changeText = () => {
      const futureCareer = "software engineer";
      var x = document.getElementById("demo");
      x.style.color = "green";
      x.innerHTML = futureCareer;
  }
  ```


5. 
  ```javascript
  const addLunch = () => {
      let node = document.createElement("li");
      let textnode = document.createTextNode("Bagged Lunch");
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);

      let p = document.getElementById("instructions");
      document.getElementById("activity").removeChild(p);
  }
  ```

6. 
  ```javascript
  function insert_Row() {
    const x = document.getElementById('sampleTable').insertRow(0);
    const y = x.insertCell(0);
    const z = x.insertCell(1);
    y.innerHTML="New Cell1";
    z.innerHTML="New Cell2";
  }
  ```

7. 
  ```javascript
  function removecolor() {
    const x = document.getElementById("colorSelect");
    x.remove(x.selectedIndex);
  }
  ```

8. 
  ```javascript
  function display_random_image() {
      const theImages = [{
          src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
          width: "240",
          height: "160"
      }, {
          src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
          width: "320",
          height: "195"
      }, {
          src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
          width: "500",
          height: "343"
      }];
      
      const preBuffer = [];
      for (var i = 0, j = theImages.length; i < j; i++) {
          preBuffer[i] = new Image();
          preBuffer[i].src = theImages[i].src;
          preBuffer[i].width = theImages[i].width;
          preBuffer[i].height = theImages[i].height;
      }
     
    // create random image number
    function getRandomImg(min,max) {
      imageNum = Math.floor(Math.random() * (max - min + 1)) + min;
      return preBuffer[imageNum];
    }  

  // 0 is first image,   preBuffer.length - 1) is  last image
    
    const newImage = getRandomImg(0, preBuffer.length - 1);
     
    // remove the previous images
    const images = document.getElementsByTagName('img');
    const l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }

    // display the image  
    document.body.appendChild(newImage);
  }
    


const search = async (film)=>{
  // var reload ="false"
  
  var titre = 'http://www.omdbapi.com/?s='+film+'&apikey=ff461133'
  const response=await fetch(titre);
  const data = await response.json();
  var result = document.getElementById("result") 
  var i = 0;
  var img ;
  console.log(data.Search)
  var src= document.getElementById("card");
  // if(src.hasChildNodes()){
  //   console.log(src.childNodes)
  //   var lengthNode = src.childNodes
  //   for(var i = 0;i<lengthNode;i++){
  //     src.removeChild(src[i]);
  //   }
  // }
  while(i<data.Search.length){
    

    var card = document.getElementById("card");
    var cardAll=document.getElementById("card").innerHTML;
    // var h2Remove= document.querySelector("h2")
    //  if(h2Remove !=null){
    //    h2Remove.remove();
    //  }
   

    //title
   
    var h2 = document.createElement("h2")
    var title = document.createTextNode(data.Search[i].Title);
    h2.appendChild(title);
    
    document.body.insertBefore(h2,card) 
  
   // img
   img =document.createElement("img")
   img.src = data.Search[i].Poster 
   src.appendChild(img)
   document.body.insertBefore(img,card)
   i++;
  }

}


document.getElementById("searchButton").addEventListener("click",()=>{
  
  var film =document.getElementById("searchInput").value;
  var src= document.getElementById("card");
  while (src.hasChildNodes()) {
    src.removeChild(src.lastChild);
  }  
  search(film);
  
  

})


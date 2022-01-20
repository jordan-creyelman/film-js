
const search = async (film)=>{  
  var titre = 'http://www.omdbapi.com/?s='+film+'&apikey=ff461133'
  const response=await fetch(titre);
  const data = await response.json();
  var i = 0;
  var src= document.getElementById("card");

  while(i<data.Search.length){
    
  src.innerHTML += `
  <div id="movieCard-${i}" class="card my-2 movie-card">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.Search[i].Poster}" class="card-img movie-img" alt="movie poster">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.Search[i].Title}</h5>
        <p> ${data.Search[i].Year} </p>
        <button id="readMore-${i}" class="btn btn-primary">Read more</button>
      </div>
    </div>
  </div>
</div>`;
i++;
};
}



document.getElementById("searchButton").addEventListener("click",()=>{
  
  var film =document.getElementById("searchInput").value;
  var src= document.getElementById("card");
  src.innerHTML="";
  search(film);
  
  

});


  var f = fetch("https://restcountries.eu/rest/v2/all");
  
  var d = f.then((value) => {

    console.log(value)
    return value.json();
 }).then((data) => {

  country(data);

 }) .catch((error) => {
console.log(error)

 })

 function country (resource){

    var No = 1;
    var row = document.querySelector("#row")        

 for(i=0;i<resource.length;i++){

  row.setAttribute("class" , "row mt-3")
  var column = document.createElement("div");
  column.setAttribute("class" , " col col-sm-2 col-md-4 col-lg-3 col-xl-3 mt-4");
  

// card 
  var card = document.createElement("div")
  card.setAttribute("class","card");
  card.style.height = "300px"
  column.appendChild(card)

  //card header

  var cardHeader  = document.createElement("div")
  cardHeader.setAttribute("class" , "card-header")
  cardHeader.style.textAlign = "center"
  cardHeader.innerHTML  = No + ")." + " "+ resource[i]["name"]
  cardHeader.style.height = "300px"
  card.appendChild(cardHeader)


  // image insertion
  var image = document.createElement("img")
  image.src =  resource[i]["flag"];
  image.setAttribute("class" , " card-img-top")
  image.setAttribute("class" , "mt-3")
  image.style.width = "100%"
  image.style.height = "40% "
  cardHeader.appendChild(image);

  //card body

  var cardBody = document.createElement("div")
  cardBody.setAttribute("class" , "card-body")
  cardHeader.appendChild(cardBody)

  var cardText = document.createElement("p")
  cardText.setAttribute("class" , "card-text")
  cardText.style.textAlign = "left"
  cardText.style.fontSize = "15px"
  cardText.innerHTML = "Capital :" + " "+ resource[i]["capital"] + "\n" + "CountryCodes : "  + resource[i]["alpha2Code"] + "," + resource[i]["alpha3Code"] + "\n"+"Region : " + " " + resource[i]["region"];  cardBody.appendChild(cardText)


 row.appendChild(column)
  contain.appendChild(row)
  No++;

 }
}



function pokedex(){

  var name = "";
  var id = "";
  var type = "";
  var photo = "";
  var content = "";
  var contentInfo = "";
  var contentphoto = "";
  var InfoType= "";
  var Infoname= "";
  var Infoid= "";
  var emptyDiv= "";
  for (var i = 0; i < pokemones.length; i++) {

    name = pokemones [i].name;
    id = pokemones [i].id;
    type = pokemones [i].type;
    photo = pokemones [i].photo;

console.log(name + id + type + photo);
contentPhoto= "<div class= 'photo'>" + "<img src='img/photos/" + photo + ".png'>" + "</div>";
 Infoname = "<h2>" + name +"</h2>";
 Infoid= "<span>" + id + "</span>";
 InfoType = "<img src='img/types/fairy.png'>"
 auxDiv = "<div id='container' class='d-flex flex-wrap'>"+Infoid+InfoType+"</div>;"
 contentInfo= "<div class 'info'>" + Infoname + auxDiv + "</div>";
console.log(contentPhoto);
content= content + "<div class='pokemon'>" + contentPhoto + contentInfo + "</div>";


document.getElementById('container').innerHTML= content;
}
}

var dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dataUrl, true);
  xhr.send();
  xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    add_new_img(data.photos.photo);
  }
}

function add_new_img(dataset) {
  var gal = document.getElementById("gallery");
  dataset.forEach(function (item) {
    var imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`;
    var img = document.createElement("img");
    img.setAttribute("src", imgSrc);
    gal.appendChild(img);
  });
}
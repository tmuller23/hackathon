console.log(" we are live");

const images = document.getElementsByTagName('img');

console.log(images);

for (let i = 0; i < images.length; i++) {
  console.log(images[i].src)
  images[i].src = "images/scaryDog.jpg";
}
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }
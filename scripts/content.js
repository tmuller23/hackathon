console.log(" we are live");
const images = document.getElementsByTagName('img');
console.log(images);
let dogsData;



fetch('https://random.dog/doggos')
  .then(res => res.json())
  .then(data => {dogsData = data})
  .then(() => {
    changePics(dogsData);
  });


function changePics(data) {
  let cleanedUpData = [];
  data.forEach(img => {
    if (img.slice(-3) === 'jpg') {
      cleanedUpData.push(img);
    }
  })
  for (let i = 0; i < images.length; i++) {
    var item = cleanedUpData[Math.floor(Math.random()*cleanedUpData.length)];
    console.log(item);
    images[i].src = "https://random.dog/" + item;
  }
}

// for (let i = 0; i < images.length; i++) {
//   images[i].src = "https://i.etsystatic.com/35555644/r/il/7f2095/4223900932/il_fullxfull.4223900932_cort.jpg";
// }

// const images = document.getElementsByTagName('img');
// console.log(images);

// for (let i = 0; i < images.length; i++) {
//   images[i].src = "https://i.etsystatic.com/35555644/r/il/7f2095/4223900932/il_fullxfull.4223900932_cort.jpg";
// }
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }
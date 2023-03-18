const images = [
  "images/imagespic-1.jpg",
  "images/imagespic-2.jpg",
  "images/imagespic-3.jpg",
  "images/imagespic-4.jpg",
  "images/imagespic-5.jpg",
  "images/imagespic-6.jpg",
  "images/imagespic-7.jpg",
  "images/imagespic-8.jpg",
  "images/imagespic-9.jpg",
  "images/imagespic-10.jpg",
  "images/imagespic-11.jpg",
  "images/imagespic-12.jpg",
  "images/imagespic-13.jpg",
  "images/imagespic-14.jpg",
  "images/imagespic-15.jpg",
];


let imgIndex = 0;
const imgEl = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  imgEl.setAttribute("src", imgUrl);
  imgIndex++;
}, 1500);
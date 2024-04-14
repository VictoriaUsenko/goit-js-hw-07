const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
//--------------case 1---------------//
const galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery-list");

function createGalleryEL(image) {
  const imgEl = document.createElement("img");
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = "360";
  return imgEl;
}
const imegesEl = images.map(createGalleryEL);
galleryEl.append(...imegesEl);

//--------------case 2---------------//
// let resultMarkup = "";
// const galleryEl = document.querySelector(".gallery");

// const createItemsMarkup = (item) => {
//   resultMarkup += `<li><div><img src="${item.url}" alt = "${item.alt}"width="360"/></div></li>`;
// };
// images.forEach(createItemsMarkup);

// galleryEl.insertAdjacentHTML("afterbegin", resultMarkup);

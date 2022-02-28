const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogImages = document.querySelector("#dog-image-container")
const dogNames = document.querySelector('#dog-breeds')

function getImages() {
fetch(imgUrl)
.then (res => res.json())
.then(images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs)
         renderImg(imgsArray)
    })
} 
function createImgElement (imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}
function renderImgs(imgsArray){
    imgsArray.forEach(element => {
         renderImg(element)
      })
 }
function renderImg(element) {
    dogImages.innerHTML += element
}
 
function getBreeds() {
fetch(breedUrl)
.then (res => res.json())
.then(breeds => {
    const breedsArray = Object.keys(breeds.message)
   const breedLis = createLiElements(breedsArray)
    renderLis(breedLis)
 })
}

function createLiElements(breedsArray) {
    return breedsArray.map((breed)=> {
        let li =`<li> ${breed}</li>`
        return li
    })
}

function renderLis(breedsLi){
    breedsLi.forEach(element => {
        renderElement(element)
    })
}

getImages()
getBreeds() 

// const imgs = breeds.message
    // let imgsArray = createImgElement(imgs)
    //      renderImg(imgsArray)
 
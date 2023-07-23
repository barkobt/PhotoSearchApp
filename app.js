const searchBox = document.querySelector("#form-wrapper");
const searchForm = document.querySelector(".searchForm");
const buttons = document.querySelector(".button-wrapper");
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const images = document.querySelector("#image-wrapper");

runEventListeners();

function runEventListeners() {
    searchForm.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}




function clear() {
    searchInput.value = "";
    // Array.from(images.children).forEach((child)=>child.remove());
    images.innerHTML = "";

}



let deffault = false;

function search(e) {
    

    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID sPfaEvmArqHlRIkgxXBFEp8ejXkH5GfSSp7As8x6-i0"
        }
    })
        .then((photos) => photos.json())
        .then((data) => {
            (data.results).forEach((photo) => {
                getPhotosToTheUI(photo.urls.small)
                deffault = true;
            })
        })
        .catch((err) => console.log(err));


    // ? ile linklerle param'ları bağlarız. (param=query)
    e.preventDefault();
    console.log(e);




}

function getPhotosToTheUI(url) {
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);

    img.height = '400';
    img.width = '400';

    div.append(img);
    images.append(div);

}




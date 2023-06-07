const apikey = 'ImhuWl-QtG2k14ltYDpPLZ4yA-MPJNNzatuSoDpdwvA';

const formele = document.querySelector("form")
const inputele = document.getElementById("search-input")
const searchruselt = document.querySelector(".search-results")
const showMore = document.getElementById("search-buttome")

let inputdata = "";
let page = 1;

async function searchImages(){
    inputdata = inputele.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${apikey}`

    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;
    
    if (page === 1)
    {
        searchruselt.innerHTML = "";
    }

    results.map((result) =>
    {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        searchruselt.appendChild(imageWrapper);


    });
    page++
    if (page > 1)
    {
        showMore.style.display = "block"
        
    };
};

formele.addEventListener("submit", (event) =>
{
    event.preventDefault()
    page = 1;
    searchImages()
});

showMore.addEventListener("click", () =>
{
    searchImages()
});










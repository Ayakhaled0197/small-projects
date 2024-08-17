let darkMode = document.querySelector(".themes");
let darkModeToggle = document.querySelector(".themes .fa-moon")
let navBar = document.querySelector('.nav-bar')
let textInDark = document.querySelectorAll('.text-dark')
let main = document.getElementById("mainSec")
let searchBar = document.getElementById('search')
let listOfCountries = document.getElementById("options")
darkMode.addEventListener("click", getDarkMode)

let httpReq = new XMLHttpRequest()
httpReq.open("GET", "data.json");
httpReq.send()
let countries = [];
httpReq.onload = function(){
    if(httpReq.status>=200 && httpReq.status <300 && httpReq.readyState == 4 ){
        countries = JSON.parse(httpReq.responseText)
        console.log(countries)
        getCountries()
        fillOptions()
    }
    else {
        console.error('Failed to load data:', httpReq.statusText);
    }
}

if(localStorage.getItem('Nav')=="nav-bar-dark" && localStorage.getItem('texts') == "dark-mode-texts") {
    for(var i = 0 ; i<textInDark.length ; i++ ){
        textInDark[i].classList.replace("text-dark","dark-mode-texts")
    }
    darkModeToggle.classList.add("dark-mode-texts")
    darkModeToggle.classList.replace("fa-regular" ,"fa-solid");
    navBar.classList.replace("nav-bar" ,"nav-bar-dark" );
    main.classList.replace("section" ,"section-dark");
    searchBar.classList.replace("section" ,"section-dark")
}
else{
    if(darkModeToggle.classList.contains('fa-solid') && navBar.classList.contains('nav-bar-dark')){
        darkModeToggle.classList.replace("fa-solid" ,"fa-regular" );
        darkModeToggle.classList.remove("dark-mode-texts")
        navBar.classList.replace("nav-bar-dark" ,"nav-bar");
        for(var i = 0 ; i<textInDark.length ; i++ ){
            textInDark[i].classList.replace("dark-mode-texts" ,"text-dark")
        }
        main.classList.replace( "section-dark","section")
        searchBar.classList.replace( "section-dark","section")
    }
}

function getDarkMode(){
    if(darkModeToggle.classList.contains('fa-solid') && navBar.classList.contains('nav-bar-dark')){
        darkModeToggle.classList.replace("fa-solid" ,"fa-regular" );
        darkModeToggle.classList.remove("dark-mode-texts")
        navBar.classList.replace("nav-bar-dark" ,"nav-bar");
        for(var i = 0 ; i<textInDark.length ; i++ ){
            textInDark[i].classList.replace("dark-mode-texts" ,"text-dark")
        }
        main.classList.replace( "section-dark","section")
        searchBar.classList.replace( "section-dark","section")
        localStorage.setItem("texts" , "text-dark")
        localStorage.setItem("Nav" , "nav-bar")
        localStorage.setItem("main" , "section")
    }
    else{
        for(var i = 0 ; i<textInDark.length ; i++ ){
            textInDark[i].classList.replace("text-dark","dark-mode-texts")
        }
        main.classList.replace("section" ,"section-dark")
        searchBar.classList.replace("section" ,"section-dark")
        darkModeToggle.classList.add("dark-mode-texts")
        darkModeToggle.classList.replace("fa-regular" ,"fa-solid");
        navBar.classList.replace("nav-bar" ,"nav-bar-dark" );
        localStorage.setItem("texts" , "dark-mode-texts")
        localStorage.setItem("Nav" , "nav-bar-dark")
        localStorage.setItem("main" , "section-dark")
    }

}

function getCountries(){
let container = ''
for(let i =0 ; i< countries.length ; i++){
    container+= `
                <div class="card" style="width: 20rem;">
                    <img src="${countries[i].flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
    `
}
main.innerHTML =container;
}
function fillOptions(){
    let container2 = '<option value="">Filter By Region</option>'
    let regionContainer = new Set();
    let prevRegion = null;
    for(let i =0 ; i < countries.length ; i++){
            regionContainer.add(countries[i].region)
    }
    let regionContainerArray = Array.from(regionContainer)
    for(let i =0 ; i<regionContainerArray.length ; i++){
            container2 +=`
                    <option value="${countries[i].region}">${countries[i].region}</option>
                    `
    }
    listOfCountries.innerHTML = container2;
}


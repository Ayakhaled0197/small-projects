
// BOM
let header = document.querySelector('.nav') ;
let upBtn = document.getElementById("backToTop")
window.onscroll = function (){
    if(window.scrollY > 100){
        // header.classList.add('nav-fixed')
        upBtn.classList.add('btn-primary-up')
    }
    else {
        // header.classList.remove('nav-fixed')
        upBtn.classList.remove('btn-primary-up')
    }
}

let navigate = document.querySelector(".navigate");
let btnThemeColor = document.querySelector(".different-themes")
navigate.addEventListener("click", getColors)
let btnThemeColorOpened = window.getComputedStyle(btnThemeColor).right
function getColors(){
    if(btnThemeColorOpened === "-200px"){
        btnThemeColor.classList.replace('different-themes' ,'different-themes-clicked');
    }
    else if(btnThemeColorOpened === "0px"){
        btnThemeColor.classList.replace('different-themes-clicked' ,'different-themes');
    }
}

upBtn.addEventListener('click' , backToTop)

function backToTop(){
    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
}

document.getElementById('fileIn').addEventListener('change', function(event) {
    const files = event.target.files; // This is a FileList object
    for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log('File name:', file.name);
    console.log('File size:', file.size);
    console.log('File type:', file.type);
    }
});

// /////////////////////////////////////////////////////////////////////////////////////////
var cartoona = "";
var cartoona2 = `
<option value="">please choose a year</option>
`
for(var i = 1950 ; i<=2000 ; i++){
    cartoona +=`<option value="">${i}</option>`;
}

document.getElementById('listOp').innerHTML = cartoona2 + cartoona;

var container  = "";

for(var i = 0 ; i< 10 ; i++){
    container += `
    <li> ${i} - list item </li>`;
}
document.getElementById('listing').innerHTML = container;

var container2 = "";
for(var i = 0 ; i<5 ; i++){
    container2 += `
        <div class="some-style">
        ${i} - content
    </div>`;
}
// document.getElementById('test').innerHTML = container2;

// var container3 = "";
// var arr=[];
// function addRow(){
//     for(var i =0 ; i<5 ; i++){
//         container3 += `
//         <tr>
//         <td>${i}</td>
//         <td>userName</td>
//         <td>userAge</td>
//         </tr>
//         `
//         document.getElementById('tableTest').innerHTML = container3;
//     }

// }


// function addItemToLog(){
//     let info = {
//         name : username.value,
//         email : email.value ,
//         numberof : phonenumber.value
//     };
//     arr2.push(info);
//     console.log(arr2);
// }
var username ; 
var email ; 
var phonenumber ;
var count ;
var adder ;
var arr2= []
var img ;

if(localStorage.getItem("userInformation") == null){
    arr2 =[]
}
else {
    arr2 = JSON.parse(localStorage.getItem("userInformation"));
    displayInfo()
}

document.addEventListener('DOMContentLoaded' , function(){
    username =document.getElementById('username')
    email =document.getElementById('emailjs')
    phonenumber = document.getElementById('num')
    adder = document.getElementById('addAll')
    count =document.getElementById('count')
    img = document.getElementById("pic")
})

function userInfo(event){
    let info = {
        userName : username.value ,
        Email: email.value ,
        userNumber : phonenumber.value ,
        totalusers :parseInt(count.value),
        addAll : parseInt(adder.value),
        imgage : img.files[0].name
    }

    var container5 ="";
    if(info.addAll > 0){
        for(var i = 0 ; i< info.addAll ; i++){
            arr2.push(info)
        }
    }
    else{
        arr2.push(info)
    }
    localStorage.setItem("userInformation" , JSON.stringify(arr2))
    displayInfo()
    totalUsers()
    emptyForm()
}

function totalUsers(){
    var sum = 0
for(var i =0 ; i< arr2.length; i++){
    sum+=arr2[i].totalusers
}
return sum;
}

function displayInfo(){
    let container4 = ""; // ********important to be initialized inside the function
    for(var i = 0 ; i< arr2.length ; i++){
        container4 +=`
        <tr>
        <td>${i+1}</td>
        <td>${arr2[i].userName}</td>
        <td>${arr2[i].Email}</td>
        <td>${arr2[i].userNumber}</td>
        <td>${totalUsers()}</td>
        <td>${arr2[i].image}</td>
        <td>
        <button class ="btn btn-danger" onclick="deleteSingleProdcut(${i})">
        delete 
        </button> </td>
        <td> 
        <button class="btn btn-warning" id="updateSingle" onclick="editUser(${i})">
        Update </button> </td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = container4;
}

function deleteAllInfo(){
    arr2.splice(0);
    localStorage.setItem("userInformation" , JSON.stringify(arr2))
    displayInfo();
    // the function is called because changes have been made to the array 
    // and we want the new changes to display 
}

function emptyForm(){
    username.value = null; 
    email.value = null ;
    phonenumber.value = null;
    count.value = null;
adder.value = null
img.files[0].name = null
}

function deleteSingleProdcut(i){
    arr2.splice(i,1)
    localStorage.setItem("userInformation" , JSON.stringify(arr2))
    displayInfo()
}

function editUser(index) {
    currentIndex = index;
    let user = arr2[index];
    username.value = user.userName;
    email.value = user.Email;
    phonenumber.value = user.userNumber;
    count.value = user.totalusers;
    adder.value = user.addAll;
    img.value = "";

    document.getElementById('submit').innerText = "Update";
    document.getElementById('submit').onclick = updateUser;
}

function updateUser(event) {
    let info = {
        userName: username.value,
        Email: email.value,
        userNumber: phonenumber.value,
        totalusers: parseInt(count.value),
        addAll: parseInt(adder.value),
        image: img.files[0] ? img.files[0].name : arr2[currentIndex].image
    };

    arr2[currentIndex] = info;
    localStorage.setItem("userInformation", JSON.stringify(arr2));
    displayInfo();
    totalUsers();
    emptyForm();

    document.getElementById('submit').innerHTML = "Save";
    document.getElementById('submit').onclick = userInfo;
}
///////////
let userInfoo = {
    name: "aya" ,
    age : 21 , 
    favColor : "purple"
}

// localStorage.setItem("name" , "aya")
// localStorage.setItem("infoo" ,JSON.stringify(userInfoo))

// var x = localStorage.getItem('infoo')
// console.log(x)

// DOM Learning 

var h2s = document.getElementsByClassName('collection');
console.log(h2s)
for(var i =0 ; i< h2s.length ; i++){
    console.log(h2s[i])
}

var xx = document.querySelector('.btn-dom')

xx.addEventListener( "click" , function(e){
    document.querySelector(".btn-dom").innerHTML = "happened ! "
    document.querySelector(".btn-dom").style =" color:darkgoldenrod; padding:10px; font-weight:700;"
    console.log(e);
})


var another = document.querySelector(".btn-dom-2")

let divColoring = document.querySelector(".test-file")


divColoring.addEventListener("mousemove" , function(){
let r = Math.random()*255
let g = Math.random()*255
let b = Math.random()*255
    document.querySelector(".test-file").style.backgroundColor=`rgb(${r},${g},${b})`
})

let divStyleChange = document.getElementById("replace")

divStyleChange.addEventListener("mouseleave" , function(){
// divStyleChange.classList.remove()
divStyleChange.classList.replace( "test-classList" ,"test-classList-replace")
})


let mainImg = document.getElementById('mainImg')

let imgs = document.querySelectorAll(".img-styling img")

for(var i =0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click", function(e){
        let imgView = e.target.src
        mainImg.setAttribute("src",imgView)
    })
}


let galleryImgs = Array.from(document.querySelectorAll('.img-gallery img')) 
let closeBtn = document.getElementById('closeIcon')
let rightbtn = document.getElementById('arrowRight')
let leftbtn = document.getElementById('arrowLeft')

let currentIndexSlider = 0
for(var i =0 ; i<galleryImgs.length ; i++){
    galleryImgs[i].addEventListener("click", function(e){
        currentIndexSlider = galleryImgs.indexOf(e.target)
        document.querySelector('.focus-on-img').style.display ="flex";
        let imgSrc = e.target.src
        document.querySelector('.inner-focus').style.backgroundImage =`url(${imgSrc})`
    })
}

closeBtn.addEventListener("click" , closeItem)
function closeItem(){
    document.querySelector('.focus-on-img').style.display ="none";
}

rightbtn.addEventListener("click" , goRight)
function goRight(e){
    currentIndexSlider++;
    if(currentIndexSlider  > galleryImgs.length -1){
        currentIndexSlider = 0;
    }
        document.querySelector('.inner-focus').style.backgroundImage =`url(${galleryImgs[currentIndexSlider].src})`
}

leftbtn.addEventListener("click", goLeft)
function goLeft(e){
    currentIndexSlider--;
    if(currentIndexSlider  < 0 ){
        currentIndexSlider = galleryImgs.length-1;
    }
        document.querySelector('.inner-focus').style.backgroundImage =`url(${galleryImgs[currentIndexSlider].src})`
}


document.addEventListener("keydown" , function(e){
    if(e.keyCode === 39){
        goRight()
    }
    else if(e.keyCode === 37){
        goLeft()
    }
    else if( e.keyCode === 27){
        closeItem()
    }
})

// console.log('Start');

// setTimeout(() => {
//     console.log('Async operation completed');
// }, 10); // A function that runs after 2 seconds

// console.log('End');

// Define the API URL
const apiUrl = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza';

// Fetch data from the API
fetch(apiUrl)
.then(response => {
    // Check if the response is successful
    if (!response.ok) {
    throw new Error('Network response was not ok (Status: ${response.status})');
    }
    // Parse the JSON data from the response
    return response.json();
})
.then(data => {
    // Handle the parsed data
    console.log('Fetched Recipes:', data.data.recipes);
})
.catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
});
function getcards(){
    let container ='';
    for(let i =0 ; i< 4 ; i++){
        container+=`
        <div class="card col-4" style="width: 18rem;">
        <img src="${apiUrl.recipes[i].image_url}" class="card-img-top" alt="...">
        <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
        `
    }
    document.querySelector('.cards-api-callback').innerHTML = container;
}
getcards()
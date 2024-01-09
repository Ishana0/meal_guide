const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const image = document.getElementById("image");
const text = document.getElementById("text");
const modal = document.getElementById("modal");
const container = document.getElementById("container");
const content = document.getElementById("content");
const cancel = document.getElementById("cancel-img");
const mainContainer = document.getElementById("main-container")
const recipeContainer = document.getElementById("recipe-container")

document.getElementById("image")
function getData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayRandomData(data);
        })
};
getData();
function searchedData(recipeName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displaySearchedData(data.meals);
    })
}
function displaySearchedData(mealarray) {
    let array = [];
    mainContainer.innerHTML = "";
    for(let i = 0; i > mealarray.length; i++) {
        array.push(mealarray[i])
        mainContainer.innerHTML += `<div id="id">
    <div id="class"></div>
    <div id="div"></div>
    </div>`
    }
    
}

function displayRandomData(data) {
    console.log();
    let mealarray = data.meals[0];
    image.src = mealarray.strMealThumb;
    text.innerText = mealarray.strMeal;
    image.onclick = () => {
        modal.style.display = "block";
        displayModal(mealarray);
    }
}
function displayModal(mealarray) {
    let array = [];
    for (key in mealarray) {
        if (mealarray[key] != "" && mealarray[key] != " " && mealarray[key] != null) {
            if (key.startsWith("strIngre")) {
                array.push(mealarray[key])
            }
        }
    }
    console.log(array)
    for (let i = 0; i < array.length; ++i) {
        content.innerHTML += `<li>${array[i]}</li>`
    }
};
cancel.onclick = () => {
    modal.style.display = "none";
}
function search(recipe) {

} 
searchButton.onclick = () => {
    if(searchBar.value != "") {
        searchedData(searchBar.value);
    } else {
        searchBar.value = "";
    }
}










let clothes = document.querySelector("#clothes");
let back = document.querySelector("#back-clothing");
let catDiv = document.querySelector("#category-div");
let clothesDiv = document.querySelector("#category-div-1");
let category = document.querySelector("#category");
let crossCat = document.querySelector("#cross-category");
let crossCloth = document.querySelector("#cross-clothing");
let search = document.querySelector("#search1");
let searchDiv = document.querySelector("#search-result-div");
let id;

// FUNCTION TO SHOW CATEGORY MENU 
category.onclick = function () {
    showCategory();
}

function showCategory() {
    catDiv.style.display = "block";
}

// FUNCITON TO HIDE CATEGORY MENU
crossCat.onclick = function () {
    closeCatogory();
}
crossCloth.onclick = function () {
    closeCatogory();
}

function closeCatogory() {
    catDiv.style.display = "none";
    clothesDiv.style.display = "none";
}

// FUNCTION TO SHOW Category>Clothes
clothes.onclick = function () {
    showClothes();
}

function showClothes() {
    catDiv.style.display = "none";
    clothesDiv.style.display = "block";
}

// FUNCTION FOR Back to Menu
back.onclick = function () {
    closeClothes();
}

function closeClothes() {
    clothesDiv.style.display = "none";
    catDiv.style.display = "block";
}

// FUNCTIONS FOR DEBOUNCING
search.oninput = function () {
    debounce(main, 1000);
}

// FUNCTION TO FETCH API DATA
async function searchFunc() {
    let query = search.value;
    if(query==""){
        return [undefined,undefined];
    }
    let data1,data2;
    try {
        let res = await fetch(`https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=${query}&rows=20&start=0`, {

            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '181e29eba9msh74c58b902b13769p14cfdfjsndb3faaa286c2'
            }
        });
        data1 = await res.json();
        data1 = data1.response.docs;
        //console.log(data1);

        res= await fetch(`https://asos2.p.rapidapi.com/v2/auto-complete?q=${query}&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US`,{
            method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
		'X-RapidAPI-Key': '181e29eba9msh74c58b902b13769p14cfdfjsndb3faaa286c2'
	}  
        });
        data2= await res.json();
        data2= data2.suggestionGroups[0].suggestions;
        //console.log(data2);
        return [data1,data2];
    }
    catch (err) {
        console.log("err:", err);
    }
}

// FUNCTION TO APPEND API DATA
function showFunc(data1,data2) {

    searchDiv.innerHTML = null;
    searchDiv.style.display = "flex";
    let  divL=document.createElement("div");
    let Sugg=document.createElement("p");
    Sugg.setAttribute("class","search-subtitle");
    Sugg.innerText="Search Suggestions";
    divL.append(Sugg);

    let divR=document.createElement("div");
    let Match=document.createElement("p");
    Match.setAttribute("class","search-subtitle");
    Match.innerText="Possible items matches";
    divR.append(Match);

    data2.forEach((el) => {
        let {searchTerm:term}=el;
        let card = document.createElement("div");
        card.setAttribute("id", "suggestion-result");
        let div1 = document.createElement("div");
        div1.innerHTML=`<i class="fa-solid fa-magnifying-glass fa-lg"></i>`;
        let div2 = document.createElement("div");
        let term1 = document.createElement("p");
        term1.innerText = term;
        div2.append(term1);
        card.append(div1, div2);
        divL.append(card);
    })

    data1.forEach((el) => {
        // let { product_main_image_url: photo, product_title: desc } = el;
        let { thumb_image: photo, title: desc } = el;
        let card = document.createElement("div");
        card.setAttribute("id", "search-result");
        card.onclick = function () {
            searchProduct(el);
        }
        let div1 = document.createElement("div");
        let img1 = document.createElement("img");
        img1.src = photo;
        div1.append(img1);
        let div2 = document.createElement("div");
        let desc1 = document.createElement("p");
        if (desc.length > 100) {
            desc = desc.substring(0, 100) + "...";
        }
        desc1.innerText = desc;
        div2.append(desc1);
        card.append(div1, div2);
        divR.append(card);

    })
    searchDiv.append(divL,divR);
}

// FUNCIOTN MAIN IN DEBOUNCE
async function main() {
    let [data1,data2] = await searchFunc();
    if (data1 == undefined && data2 == undefined) {
        searchDiv.style.display = "none";
        return false;
    }
     console.log(data1);
     console.log(data2);
     showFunc(data1,data2);
}

// FUNCTION DEBOUNCE
function debounce(func, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        func()
    }, delay);
}

// FUNCTION TO REDIRECT FROM PRODUCT TO DETAILS PAGE
function searchProduct(el) {
    let arr = [];
    arr.push(el);
    localStorage.setItem("search", JSON.stringify(arr));
    //window.location.href = ""
}


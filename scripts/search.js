// *****  below code is for fetch and display data without import export

let sort="";
let priceRang="";
loadData();

function loadData(){
let url="";

  const options = {
  method: 'GET',
  headers: {
		'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '21b265d86emsh8bb3150679c7da6p1f6625jsndd2d71d43b9e'
  }
};

if(sort=="H2L"){
  url="https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=girls_main&sortby=2";
}
else if(sort=="L2H"){
  url="https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=girls_main&sortby=3";
}
else{
  url="https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=sale&maxprice=2&color=black&size=Medium";
}
// apply filters
// fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=women_main&pageSize=48&pageNumber=1&sortby=0&filterColor=BLACK&filterSize=XS%2FS', options)
// fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=girls_main&sortby=2', options)
fetch(url, options)  
.then(response => response.json())
  .then(response => append(response.CatalogProducts))
  .catch(err => console.error(err));
}

let sortByPrice=document.getElementById("sortDiv");
sortByPrice.addEventListener('change', function (event) {
  if(event.target.value=="Price: High - Low"){
    sort="H2L";
    document.getElementById("products").innerHTML=null;
    loadData();
    sort="";
  }
  else if(event.target.value=="Price: Low - High"){
    sort="L2H";
    document.getElementById("products").innerHTML=null;
    loadData();
    sort="";
  }
  if(event.target.value=="Best Match"){
    document.getElementById("products").innerHTML=null;
    loadData();
   sort="";
  }
});

let append = (data) => {
  console.log(data);
  data.forEach((el) => {
    let it = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.DefaultProductImage;
    img.addEventListener("click", GoToDetails);

    let title = document.createElement("p");
    title.innerText = el.DisplayName;
    title.addEventListener("click", GoToDetails);


    let soldBy = document.createElement("p");
    soldBy.innerText = "Sold by Fifth Sun";
    soldBy.addEventListener("click", GoToDetails);


    let price = document.createElement("div");
    price.id = "Pricing";
    price.addEventListener("click", GoToDetails);
    let oldPric = document.createElement("p");
    if(el.ListPrice>10){  oldPric.innerText = "$" + parseInt(el.ListPrice-9) + ".9"; }
    else{oldPric.innerText = "$" + "0.00";}
    

    let NewPric = document.createElement("p");
    NewPric.innerText = "$" + el.ListPrice;
    price.append(oldPric, NewPric);

    let ButtonDiv = document.createElement("div");
    ButtonDiv.id = "ButtonDiv";

    let divDetail = document.createElement("button");
    divDetail.innerText = "See Details";
    divDetail.onclick = function () { GoToDetails();  }

    function GoToDetails(){
       let a = "details";
       createProductKeyFun(a);
       window.open("ProductDetails.html", "_self");
    }

    let divBuying = document.createElement("button");
    divBuying.innerText = "Add to Cart";
    divBuying.onclick = function () {
       AddToCart();
    }

    function AddToCart(){
      let a = "cart";
      createProductKeyFun(a);
      //location.reload();
      countcart()
      //window.open("cart.html", "_self");
   }

// FUNCTION TO CHECK ITEMS IN CART START
   let cartIcon=document.querySelector("#cartIcon");
   let cartCountDiv=document.querySelector("#cart-count-div");
   let cartCount=document.querySelector("#cart-count");
   
function countcart(){
  let key=localStorage.getItem("islogin");
  if(key=="true"){
      let arr=JSON.parse(localStorage.getItem("ProductInCart")) || [];
      if(arr.length>0){
          cartCount.innerText=arr.length;
          cartCountDiv.style.display="block";
          cartIcon.style.color="tomato";
      }
  }
}
// FUNCTION TO CHECK ITEMS IN CART END

    ButtonDiv.append(divDetail, divBuying);

    price.append(oldPric, NewPric);

    it.append(img, title, soldBy, price, ButtonDiv);
    let parentDiv = document.querySelector("#products");
    parentDiv.append(it);


    function createProductKeyFun(a) {
      let showProduct;
      if (a == "details") { showProduct = JSON.parse(localStorage.getItem("ProductKey"));  }
      else { showProduct = JSON.parse(localStorage.getItem("ProductInCart")) || []; }

      let ProductObj = {
        title: el.DisplayName,
        image: el.DefaultProductImage,
        price: el.OriginalPrice,
      };
      if (a == "cart") {
        showProduct.push(ProductObj);
        localStorage.setItem("ProductInCart", JSON.stringify(showProduct));
      }
      else {
        showProduct = ProductObj;
        localStorage.setItem("ProductKey", JSON.stringify(showProduct));
      }
    }

  })

}

let a = 0;
function Women_Clothing() {
  let p1 = document.createElement("p");
  p1.innerText = "Shirts & Tops  (108,897)";
  let p2 = document.createElement("p");
  p2.innerText = "Dresses  (58,701)";
  let p3 = document.createElement("p");
  p3.innerText = "Swimwear  (35,069)";
  let p4 = document.createElement("p");
  p4.innerText = "Sweaters  (33,810)";
  let p5 = document.createElement("p");
  p5.innerText = "Activewear  (26,312)";
  let p6 = document.createElement("p");
  p6.innerText = "Pants  (24,416)";
  let p7 = document.createElement("p");
  p7.innerText = "Special Occasion  (21,170)";
  let p8 = document.createElement("p");
  p8.innerText = "Jackets & Coats  (22,048)";
  let p9 = document.createElement("p");
  p9.innerText = "Jeans  (21,910)";
  let p10 = document.createElement("p");
  p10.innerText = "Bras  (19,479)";

  let D = document.getElementById("Women_Clothing");
  D.append(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);

  if (a == 1) {
    D.innerHTML = null; a = 0;
    let arrow = document.getElementById("Women_Clothing_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    a = 1;
    let arrow = document.getElementById("Women_Clothing_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }


}

let b = 0;
function CategoryFun() {
  let p1 = document.createElement("p");
  p1.innerText = "Women  (464,256)";
  let p2 = document.createElement("p");
  p2.innerText = "Accessories  (9,118)";
  let p3 = document.createElement("p");
  p3.innerText = "Men  (1,887)";
  let p4 = document.createElement("p");
  p4.innerText = "Girls  (190)";
  let p5 = document.createElement("p");
  p5.innerText = "Baby & Toddler  (81)";
  let p6 = document.createElement("p");
  p6.innerText = "Boys  (35)";

  let D = document.getElementById("CategoryDiv");
  D.append(p1, p2, p3, p4, p5, p6);

  if (b == 1) {
    D.innerHTML = null; b = 0;
    let arrow = document.getElementById("Category_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    b = 1;
    let arrow = document.getElementById("Category_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }

}

let c = 0;
function Fabric() {
  let p1 = document.createElement("p");
  p1.innerText = "Polyester  (143,105)";
  let p2 = document.createElement("p");
  p2.innerText = "Cotton & Blends  (106,698)";
  let p3 = document.createElement("p");
  p3.innerText = "Nylon  (47,904)";
  let p4 = document.createElement("p");
  p4.innerText = "Denim  (33,338)";
  let p5 = document.createElement("p");
  p5.innerText = "Knit  (15,353)";
  let p6 = document.createElement("p");
  p6.innerText = "Satin  (11,989)";

  let D = document.getElementById("Fabric");
  D.append(p1, p2, p3, p4, p5, p6);

  if (c == 1) {
    D.innerHTML = null; c = 0;
    let arrow = document.getElementById("Fabric_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    c = 1;

    let arrow = document.getElementById("Fabric_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }

}


let d = 0;
function Color() {
  let p1 = document.createElement("p");
  p1.innerText = "Beige  (21,687)";
  let p2 = document.createElement("p");
  p2.innerText = "Black  (114,441)";
  let p3 = document.createElement("p");
  p3.innerText = "Blue  (78,711)";
  let p4 = document.createElement("p");
  p4.innerText = "Brown  (15,437)";
  let p5 = document.createElement("p");
  p5.innerText = "Gray  (24,250)";
  let p6 = document.createElement("p");
  p6.innerText = "Green  (29,767)";
  let p7 = document.createElement("p");
  p7.innerText = "Navy  (9,686)";
  let p8 = document.createElement("p");
  p8.innerText = "Pink  (35,913)";

  let D = document.getElementById("Color");
  D.append(p1, p2, p3, p4, p5, p6, p7, p8);

  if (d == 1) {
    D.innerHTML = null; d = 0;
    let arrow = document.getElementById("Color_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    d = 1;
    let arrow = document.getElementById("Color_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }

}


let e = 0;
function Special_Size() {
  let p1 = document.createElement("p");
  p1.innerText = "Any Size  (361,570)";
  let p2 = document.createElement("p");
  p2.innerText = "Husky  (21)";
  let p3 = document.createElement("p");
  p3.innerText = "Juniors  (12,180)";
  let p4 = document.createElement("p");
  p4.innerText = "Maternity  (7,163)";
  let p5 = document.createElement("p");
  p5.innerText = "Petite  (35,069)";
  let p6 = document.createElement("p");
  p6.innerText = "Plus  (61,219)";

  let D = document.getElementById("Special_Size");
  D.append(p1, p2, p3, p4, p5, p6);

  if (e == 1) {
    D.innerHTML = null; e = 0;
    let arrow = document.getElementById("Special_Size_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    e = 1;
    let arrow = document.getElementById("Special_Size_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }
}


let f = 0;
function Size() {
  let p1 = document.createElement("p");
  p1.innerText = "1X  (798)";
  let p2 = document.createElement("p");
  p2.innerText = "2X  (580)";
  let p3 = document.createElement("p");
  p3.innerText = "L  (2,844)";
  let p4 = document.createElement("p");
  p4.innerText = "M  (2,810)";
  let p5 = document.createElement("p");
  p5.innerText = "S  (3,178)";
  let p6 = document.createElement("p");
  p6.innerText = "XL  (3,903)";

  let D = document.getElementById("Size");
  D.append(p1, p2, p3, p4, p5, p6);

  if (f == 1) {
    D.innerHTML = null; f = 0;
    let arrow = document.getElementById("Size_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    f = 1;
    let arrow = document.getElementById("Size_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }
}



let g = 0;
function Price_Range() {
  let p1 = document.createElement("p");
  p1.innerText = "$20.00 and Below  (20,749)";
  p1.onclick=function() {
  alert("below 20.00");
  // priceRang="&maxprice=250";
  // document.getElementById("product").innerHTML=null;

  
}

  let p2 = document.createElement("p");
  p2.innerText = "$20.01 - $30.00  (16,152)";
  p2.onclick=function() {
    alert("20-30");
  }

  let p3 = document.createElement("p");
  p3.innerText = "$30.01 - $50.00  (18,059)";
  p3.onclick=function() {
    alert("30-50");
  }

  let p4 = document.createElement("p");
  p4.innerText = "$50.01 - $90.00  (15,438)";
  p4.onclick=function() {
    alert("50-90");
  }

  let p5 = document.createElement("p");
  p5.innerText = "$90.01 and Above  (14,077)";
  p5.onclick=function() {
    alert("90-above");
  }


  let D = document.getElementById("Price_Range");
  D.append(p1, p2, p3, p4, p5);

  if (g == 1) {
    D.innerHTML = null; g = 0;
    let arrow = document.getElementById("Price_Range_arrow");
    arrow.classList.remove("fa-angle-up");
    arrow.className = "fa-solid fa-angle-down";
  }
  else {
    g = 1;
    let arrow = document.getElementById("Price_Range_arrow");
    arrow.classList.remove("fa-angle-down");
    arrow.className = "fa-solid fa-angle-up";
  }
}
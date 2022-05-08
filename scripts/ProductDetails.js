var CartProducts = JSON.parse(localStorage.getItem("ProductKey"))

document.getElementById("ProductTitle").innerText=CartProducts.title;
let pri=CartProducts.price-1;
document.getElementById("ProductPrice").innerText="$"+ pri +" - "+ " $"+ CartProducts.price;
document.getElementById("ProductImage").src=CartProducts.image;
document.getElementById("ProductImage2").src=CartProducts.image;

document.getElementById("GoToCartPage").addEventListener("click", GoToCartPage);


function GoToCartPage(){
  let key=localStorage.getItem("islogin");
  if(key=="true"){
    let showProduct = JSON.parse(localStorage.getItem("ProductInCart")) || [];

      let ProductObj = {
        title: CartProducts.title,
        image: CartProducts.image,
        price: CartProducts.price,
      };

        showProduct.push(ProductObj);
        localStorage.setItem("ProductInCart", JSON.stringify(showProduct));
      location.reload();
    //window.open("cart.html","_self");
  }else{
    alert("You need to login/Signup first!");
  }
    
}

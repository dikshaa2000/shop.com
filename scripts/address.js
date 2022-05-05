//Only for showing the total Price

let TotalPrice = JSON.parse(localStorage.getItem("Total Price"))

let topTOT = document.getElementById("Total_check")
topTOT.innerText = `Order Total: $${Math.floor(TotalPrice)}`
topTOT.style.fontWeight = "bold"

let botTOT = document.getElementById("Ototal")
botTOT.innerText = `$${Math.floor(TotalPrice)}`
botTOT.style.fontWeight = "bold"

//END

//Getting data from - form

// document.querySelector("form").addEventListener("submit", formfn)
// var ressDetails = JSON.parse(localStorage.getItem("addressDetails")) || []

// function formfn(){
//     event.preventDefault()

//     var dataaa = {
        // name1: document.getElementById("name").value,
        // surname1: document.getElementById("surname").value,
        // address1: document.getElementById("address").value,
        // zipcode1: document.getElementById("zpcode").value,
        // city1: document.getElementById("city").value,
        // phoneNumber1: document.getElementById("phno").value,
//     }
    
//     console.log("adadad", dataaa)
//     ressDetails.push(dataaa)
//     localStorage.setItem("addressDetails", JSON.stringify(data))
//     }

document.querySelector("form").addEventListener("submit", formFN);
  
var addressData = JSON.parse(localStorage.getItem("adddetails"))||[]
function formFN() {
  event.preventDefault();

  var data = {
        name1: document.getElementById("name").value,
        surname1: document.getElementById("surname").value,
        address1: document.getElementById("address").value,
        zipcode1: document.getElementById("zpcode").value,
        city1: document.getElementById("city").value,
        phoneNumber1: document.getElementById("phno").value,
  };
  console.log(data);
  addressData.push(data);
  localStorage.setItem("adddetails",JSON.stringify(data))

}

document.getElementById("conCheck").addEventListener("click", shipPagefn)
function shipPagefn(){
    window.location.href = "shipping.html"
}
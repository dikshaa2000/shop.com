let TotalPrice = JSON.parse(localStorage.getItem("Total Price"))

let tpice =  document.getElementById("Total_check")
tpice.innerText=`Order Total: $${Math.floor(TotalPrice)}`
tpice.style.fontWeight = "bold"
let check = document.getElementById("im1") // added hiding functionality to the form
check.addEventListener("click", showfn)

function showfn(){
    let payWindow = document.getElementById("paymentW")
    if(payWindow.style.display==="none"){
        payWindow.style.display = "block";
        payWindow.style.display = "flex";
    } else {
        payWindow.style.display = "none";
    }
}

let addressDetails = JSON.parse(localStorage.getItem("adddetails"))

let addressData = document.getElementById("innerBox1")

let nameS = document.createElement("p")
nameS.innerText = `${addressDetails.name1} ${addressDetails.surname1}`
nameS.style.fontWeight = "bold"

let add_ress = document.createElement("p")
add_ress.innerText = addressDetails.address1

let zip_code = document.createElement("p")
zip_code.innerText = `${addressDetails.zipcode1} ${addressDetails.city1}`

let phnum = document.createElement("p")
phnum.innerText = `Phone: ${addressDetails.phoneNumber1}`

addressData.append(nameS,add_ress,zip_code,phnum)
//-------------------------------------------------------------------------------
let subdata = document.getElementById("itotalV")

let totalValue = document.createElement("p")
totalValue.innerText = `$${Math.floor(TotalPrice)}`;

let taxValue = document.createElement("p")
taxValue.innerText = `$ ${16.66}`
let shipValue = document.createElement("p")
shipValue.innerText = `$ ${30.82}`

subdata.append(totalValue, taxValue, shipValue)

let Ordertotal = document.getElementById("Ototal")
Ordertotal.innerText = `$${16.66+30.82+Math.floor(TotalPrice)}`

let pagetoIndex = document.getElementById("conCheck").addEventListener("click", reload)
function reload(){
    alert("Your Order has been Placed")
    window.location.href ="index.html"
}
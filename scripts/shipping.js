let data = JSON.parse(localStorage.getItem("productData"))

data.forEach(({image, price, title},elem,index)=>{
    
    let ds = document.getElementById("leftbox1")
    let details = document.createElement("div")
    details.setAttribute("id", "left1")

    let img = document.createElement("img")
    img.src = image;

    let subdet= document.createElement("div")
    subdet.setAttribute("class", "details")

    let name=document.createElement("h2")
    name.innerText=title

    let p1 = document.createElement("p")
    p1.setAttribute("class", "p1")
    p1.innerText = `$${price}`

    let p2 = document.createElement("p")
    p2.setAttribute("class", "i")
    p2.innerText = "Item#: JSMS10760"

    let p3 = document.createElement("p")
    p3.setAttribute("class", "p2")
    let inp = document.createElement("input")
    inp.type = "number"
    inp.placeholder = "1"
    let inpBtn = document.createElement("button")
    inpBtn.setAttribute("id", "quantity")
    inpBtn.innerText = "Update"
    p3.innerText = `Quantity:`
    p3.append(inp, inpBtn)
    subdet.append(name, p1, p2, p3 )

    let btSandR = document.createElement("div")
    btSandR.setAttribute("id", "but")
    let save=document.createElement("button")
    save.innerText="Save for Later"
    let remove= document.createElement("button")
    remove.innerText="Remove"

    remove.addEventListener("click", function(){
        removeItem(elem, index)
    });
    btSandR.append(save, remove)

    details.append(img,subdet,btSandR)
    ds.append(details)

})

function removeItem(elem, index){
    console.log(elem, index)
    data.splice(index, 1);
    localStorage.setItem("productData", JSON.stringify(data))
    window.location.reload()
}

//Total Price Block-----------------------------------------
let TotalPrice = JSON.parse(localStorage.getItem("Total Price"))

let tpice =  document.getElementById("Total_check")
tpice.innerText=`Order Total: $${Math.floor(TotalPrice)}`
tpice.style.fontWeight = "bold"

//--------------------------------------------------------------------------

let addressDetails = JSON.parse(localStorage.getItem("adddetails"))

let addressData = document.getElementById("innerBox1")

let nameS = document.createElement("p")
nameS.innerText = `${addressDetails[0].name1} ${addressDetails[0].surname1}`
nameS.style.fontWeight = "bold"

let add_ress = document.createElement("p")
add_ress.innerText = addressDetails[0].address1

let zip_code = document.createElement("p")
zip_code.innerText = `${addressDetails[0].zipcode1} ${addressDetails[0].city1}`

let phnum = document.createElement("p")
phnum.innerText = `Phone: ${addressDetails[0].phoneNumber1}`

addressData.append(nameS,add_ress,zip_code,phnum)

//---------------------------------------------------------------------------

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

//--------------------------------------------------------------------------

document.getElementById("conCheck").addEventListener("click", nxtpageFN)

function nxtpageFN(){
window.location.href = "payment.html"
}
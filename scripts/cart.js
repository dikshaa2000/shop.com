
let data = JSON.parse(localStorage.getItem("productData"))
console.log(data)

let totPRice = 0

data.forEach(({image, price, title},elem,index)=>{
    
    totPRice=totPRice+Number(price)
    // console.log(description)
    localStorage.setItem("Total Price", JSON.stringify(totPRice))
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
    // ${inp} ${inpBtn}
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

    // let totalPrice = docu
})

function removeItem(elem, index){
    console.log(elem, index)
    data.splice(index, 1);
    localStorage.setItem("productData", JSON.stringify(data))
    window.location.reload()
}
let totalPrice = document.getElementById("tot")

let shareP= document.createElement("p")
shareP.innerText = "Share Total:"
let perice = document.createElement("p")
perice.innerText = `$${Math.floor(totPRice)}`
perice.style.fontWeight = "bold"
totalPrice.append(shareP,perice)

//Right

let subright = document.getElementById("shabash")

let subtotal = document.createElement("div")
subtotal.setAttribute("id", "subT")
let subp1 = document.createElement("p")
subp1.innerText = "Sub Total: "

let subp2 = document.createElement("p")
subp2. innerText = `$${Math.floor(totPRice)}`
subp2.style.fontWeight = "bold"
subtotal.append(subp1, subp2)

let a = document.createElement("a")
a.innerText = "Continue Shopping"
a.href = "#"

let abcd = document.createElement("div")
abcd.setAttribute("id", "inpbotn")

let abinp = document.createElement("input")
abinp.type = "number"
abinp.placeholder = "Zip Code"
abinp.setAttribute("id", "ab")

let cdbtn = document.createElement("button")
cdbtn.innerText = "Estimate Shipping"
cdbtn.setAttribute("id", "cd")

abcd.append(abinp,cdbtn)

let checkbtn = document.createElement("button")
checkbtn.innerText = "Proceed to Checkout"
checkbtn.setAttribute("id", "pcheckout")
checkbtn.addEventListener("click", checkbtnP)
function checkbtnP(elem){
    window.location.href = "address.html"
}
subright.append(subtotal, a, abcd, checkbtn)










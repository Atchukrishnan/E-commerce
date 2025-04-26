// Close offer bar
var offerbar = document.querySelector(".offerbar");
var close = document.getElementById("close");
close.addEventListener("click", function () {
  offerbar.style.display = "none";
});

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


import { products } from "./products.js";

const container = document.querySelector(".products");
const searchInput = document.getElementById("search-input");

let filterList = [];

products.forEach((product) => {
  const createItem = document.createElement("div");
  createItem.classList.add("product");
  createItem.innerHTML = `
    <img src="${product.src}" />
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="display: none;">${product.tags.join(",")}</tags>
  `;
  container.append(createItem);
});

const tags = document.getElementsByName("tag");
tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value.toLowerCase());
    } else {
      filterList = filterList.filter((item) => item !== e.target.value.toLowerCase());
    }
    update();
  });
});

searchInput.addEventListener("keyup", function () {
  update();
});

function update() {
  const searchValue = searchInput.value.toLowerCase();
  const productList = document.querySelectorAll(".product");

  productList.forEach((product) => {
    const name = product.querySelector("h1").innerText.toLowerCase();
    const tagsContent = product.querySelector("tags").innerText.toLowerCase();
    const tagsArray = tagsContent.split(",");

    const tagMatch = filterList.length === 0 || filterList.some(tag => tagsArray.includes(tag));
    const nameMatch = name.includes(searchValue);

    if (tagMatch && nameMatch) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

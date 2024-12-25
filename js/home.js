// api url
let url = "https://dummyjson.com/products";

// search_bar logic
let search_bar = document.getElementById("search_bar");
search_bar.addEventListener("input", (e)=>{ //on input event
  // console.log(e.target.value)
  let userVal = e.target.value; //will store the value provided by user in userVal variable
  //console.log(all_product)
  let filterData = all_product.filter((val)=>{ //to filter the product from the products array and display
    return val.title.toLowerCase().includes(userVal.toLowerCase()) || val.category.includes(userVal.toLowerCase())
  })
  fetchData(filterData)
})

// code for nav mouseover and mouseout
let groceries = document.getElementById("groceries");
let mobile = document.getElementById("mobile");
let fashion = document.getElementById("fashion");
let electronics = document.getElementById("electronics");
let furniture = document.getElementById("furniture");
let groceriesproducts = document.getElementById("groceriesproducts");
let mobileproducts = document.getElementById("mobileproducts");
let fashionproducts = document.getElementById("fashionproducts");
let electronicsproducts = document.getElementById("electronicsproducts");
let furnitureproducts = document.getElementById("furnitureproducts");

groceries.addEventListener("mouseover", () => {
  groceriesproducts.style.display = "block";
});
groceries.addEventListener("mouseout", () => {
  groceriesproducts.style.display = "none";
});
groceriesproducts.addEventListener("mouseover", () => {
  groceriesproducts.style.display = "block";
});
groceriesproducts.addEventListener("mouseout", () => {
  groceriesproducts.style.display = "none";
});
mobile.addEventListener("mouseover", () => {
  mobileproducts.style.display = "block";
});
mobile.addEventListener("mouseout", () => {
  mobileproducts.style.display = "none";
});
mobileproducts.addEventListener("mouseover", () => {
  mobileproducts.style.display = "block";
});
mobileproducts.addEventListener("mouseout", () => {
  mobileproducts.style.display = "none";
});
fashion.addEventListener("mouseover", () => {
  fashionproducts.style.display = "block";
});
fashion.addEventListener("mouseout", () => {
  fashionproducts.style.display = "none";
});
fashionproducts.addEventListener("mouseover", () => {
  fashionproducts.style.display = "block";
});
fashionproducts.addEventListener("mouseout", () => {
  fashionproducts.style.display = "none";
});
electronics.addEventListener("mouseover", () => {
  electronicsproducts.style.display = "block";
});
electronics.addEventListener("mouseout", () => {
  electronicsproducts.style.display = "none";
});
electronicsproducts.addEventListener("mouseover", () => {
  electronicsproducts.style.display = "block";
});
electronicsproducts.addEventListener("mouseout", () => {
  electronicsproducts.style.display = "none";
});
furniture.addEventListener("mouseover", () => {
  furnitureproducts.style.display = "block";
});
furniture.addEventListener("mouseout", () => {
  furnitureproducts.style.display = "none";
});
furnitureproducts.addEventListener("mouseover", () => {
  furnitureproducts.style.display = "block";
});
furnitureproducts.addEventListener("mouseout", () => {
  furnitureproducts.style.display = "none";
});

let all_product =""; // for storing product array from the api

// for productContainer / main section
//to fetch the data (products) from the given dummy api url
let productContainer = document.getElementById("productContainer");
let cardContainer = document.getElementById("cardContainer");
fetch(url)
  .then((e) => {
    return e.json();
  })
  .then((data) => {
    console.log(data.products);
    // console.log(typeof data.products);
    localStorage.setItem("products", JSON.stringify(data.products)); //to convert js object to JSON //products->key
    all_product = data.products; //reinitializing with data.products array to all_products
    fetchData(all_product); //fetching the array from that api url
  });

// funtion to display product
function fetchData(p) {
  let input = "";
  p.map((value) => {
    input +=
      // `
      // <div class=" productBox">
      //     <img src = ${value.images[0]} alt=${value.title}/>
      //     <h4>${value.title}</h4>
      //     <div class = "priceContainer">
      //         <p>${value.price}</p>
      //         <p>${value.rating}</p>
      //     </div>
      // </div>
      `
        <div class="col-12 col-md-6 col-lg-4 mb-3 productBox">
            <div class="card" id="cards">
                <img src = ${value.images[0]} alt=${value.title} id="cardImg"/>
                <h4>${value.title}</h4>
                <div class = "priceContainer">
                    <p id="productPrice">${value.price}</p>
                    <p id="productRating">${value.rating}</p>
                </div>
                <div class="viewMore">
                  <button id="viewMoreBtn" onclick="handleBtn(${value.id})">View More</button>
                </div>
            </div>
        </div>
        `;
  });

  cardContainer.innerHTML = input; //.innerHTML->to card the cardContainer to the ui/browser
}

// view more button handler
function handleBtn(id) {
  localStorage.setItem("productId", id); //Store the product ID in localStorage for later retrieval on the product view page
  window.location.href = "../html/productview.html"; // Redirecting to productview.html to display the product details
}

// logic for chat bot
let msgBox = document.getElementById("msgBox");
let un = document.getElementById("un");
let send = document.getElementById("send");
let chatbot = document.getElementById("chatbot");
let chatbotMsgBox = document.getElementById("chatbotMsgBox");
let delete_icon = document.getElementById("delete_icon");
let s = 0; //pointer for array
let botMessage = [
  "Enter name",
  "How may I help you?",
  "Type your query",
  "We'll connect shortly",
  "thanks",
];

send.addEventListener("click", () => {
  let userValue = un.value;
  displayData(userValue, s);
  s++;
  un.value = "";
});

function displayData(val, index) {
  let pTag = document.createElement("p");
  let spanTag = document.createElement("span");
  spanTag.textContent = val;
  pTag.textContent = botMessage[index];
  msgBox.appendChild(spanTag);
  msgBox.appendChild(pTag);
}

chatbot.addEventListener("click", () => {
  chatbotMsgBox.style.display = "block";
});

delete_icon.addEventListener("click", () => {
  chatbotMsgBox.style.display = "none";
});

//cart logic
let cart = document.getElementById("cart");
console.log(cart);

cart.addEventListener("click", () => {
  window.location.href = "../html/cart.html"; //redirect to cart.html
});


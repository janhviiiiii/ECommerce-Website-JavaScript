let jsData = JSON.parse(localStorage.getItem("products"));
let productId = JSON.parse(localStorage.getItem("productId"));

// to display one single product at a time after view more button click
single_product = jsData.find((product) => {
  // find() is a higher order function it will take callback funtion as an argument and will return the items which will macth to the provided criteria
  return product.id === productId; // return the product whoes id matches from array and targeted product after clicking on view more button
});

// console.log(single_product);

let productDetail = document.getElementById("productDetail");
let productReview = document.getElementById("productReview");

productDetail.innerHTML = `
    <div id = "imgContainer">
        <img src = ${single_product.images[0]} alt = "product image">
    </div>
    <div id = "detailsContainer">
        <h3 id = "title">${single_product.title}</h3>
        <p id = "description">${single_product.description}</p>
        <p id = "price">${single_product.price}</p>
        <p id = "ratings">${single_product.rating}</p>
        <p id = "brand">${single_product.brand}</p>
        <p id = "category">${single_product.category}</p>
        <button id = "cart">Add to Cart</button>
    </div>
`;

let productReviewArray = single_product.reviews; // Array of reviews

// Map through the reviews and generate HTML for each review
let reviewItems = productReviewArray
  .map((review) => {
    return `
        <div class="review-item">
        
            <p id="title"><strong>Reviewer:</strong> ${review.reviewerName}</p>
            <p id="rating"><strong>Rating:</strong> ${review.rating}★</p>
            <p id="comment"><strong>Comment:</strong> ${review.comment}</p>
            <p><small><strong>Date:</strong> ${new Date(
              review.date
            ).toLocaleDateString()}</small></p>
            <hr>
        </div>
        
    `;
  })
  .join(""); //.join() to ignore the , separator

// Insert the reviews into the productReview container
// Dynamically set the inner HTML of the productReview element with the reviewItems data
productReview.innerHTML = reviewItems;

//cart logic
document.getElementById("cart").addEventListener("click", () => {
  storageLocal(single_product); // Call the function to store the current product in localStorage
});

// Function to store product details in localStorage
function storageLocal(p) {
  // Retrieve the current cart products from localStorage (or initialize as an empty array if none exist)
  let cartProduct = JSON.parse(localStorage.getItem("addTocart")) || []; //If no data is present, it initializes an empty array. //JSON.parse(...) converts the JSON string into a JavaScript object or array
  console.log(cartProduct); // Log the current state of the cart for debugging
  cartProduct.push(p);     // Add the selected product to the cart array
  localStorage.setItem("addTocart", JSON.stringify(cartProduct)); //addTocart->key// Save the updated cart back to localStorage
  alert("product added");
}

let jsData = JSON.parse(localStorage.getItem("products"));
let productId = JSON.parse(localStorage.getItem("productId"));

// console.log(jsData)
// console.log(productId)

single_product = jsData.find((product)=>{
    return product.id === productId;
})

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
`

let pReview = single_product.reviews; // Array of reviews

// Map through the reviews and generate HTML for each review
let reviewItems = pReview.map((review) => {
    return `
        <div class="review-item">
        
            <p id="title"><strong>Reviewer:</strong> ${review.reviewerName}</p>
            <p id="rating"><strong>Rating:</strong> ${review.rating} ★</p>
            <p id="comment"><strong>Comment:</strong> ${review.comment}</p>
            <p><small><strong>Date:</strong> ${new Date(review.date).toLocaleDateString()}</small></p>
            <hr>
        </div>
        
    `;
}).join("");

// Insert the reviews into the productReview container
productReview.innerHTML = reviewItems;

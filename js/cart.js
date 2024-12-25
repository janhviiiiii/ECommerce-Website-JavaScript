let cartCnt=document.getElementById("cartData");
let cartData=JSON.parse(localStorage.getItem("addTocart"));
console.log(cartData)
let input=""
if(cartData.length==0){
    alert("cart id empty")
    cartCnt.innerHTML=`
    <img src="">
    <h2>CArt id empty</h2>`
}
else{
    cartData.map((data)=>{
        console.log(data);
        input += `
        <div class="col-12 col-md-6 col-lg-3 mb-3 "id="Product-cnt">
        <img id="cartProductImg" src=${data.images}>
        <p>${data.title}</P>
        <h1>$${data.price}</h1>
        <div id="quantity">
        
        <i class="fa-solid fa-plus"></i>
        
        <i class="fa-solid fa-minus"></i>
        </div>
        </div>
        `
    })
    cartCnt.innerHTML=input;
    
}
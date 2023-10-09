const productDetails={
    name:"Apple 2020 MaCBook Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256GB",
};
console.log("Below are the product details");
for(let product in productDetails){
    console.log(`${product}:${productDetails[product]}`);
}
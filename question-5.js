// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products,promotionCode){
  
  let totalPrice = 0

  for (let i = 0; i< products.length; i++) {
    console.log(products[i]);

    let priceProduct = products.price * products.quantity;

    totalProduct = totalPrice + priceProduct;
}
if(promotionCode === "SALE20"){
  totalPrice = totalPrice - (totalPrice * 20 / 100);
        return("ใช้ส่วนลด 20%");
    } else if (promotionCode === "SALE50") {
        totalPrice = totalPrice - (totalPrice * 50 / 100);
        return("ใช้ส่วนลด 50%");
    } else if (promotionCode === ""){
        return("ไม่มีส่วนลด");
    }

    return totalPrice;
}
console.log (calculateTotalPrice(products,promotionCode));


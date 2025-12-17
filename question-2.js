// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
for (let i = 0; i< inventory.length; i++) {
  console.log(inventory[i]);

  if (inventory[i].name === "Apple" ) {
    inventory[i].quantity = 200;
}
}

inventory.push({name: "Orange", price: 20, quantity: 300});
  console.log(inventory);
  
let totalStock = 0
for (let i = 0; i< inventory.length; i++) {
  let Stock = inventory[i].price * inventory[i].quantity ;
 
  totalStock = totalStock + Stock;
}
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalStock}`);
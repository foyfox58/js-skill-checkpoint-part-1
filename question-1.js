// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({id:5 , todo : "Walk the dog" });
 console.log(myTodo); 

 for (let i = 0; i< myTodo.length; i++) {
  console.log(myTodo[i]);
  
  if (myTodo[i].id === 4 ) {
      myTodo[i].todo = "Go to the gym";
  }
 }
 myTodo.pop();
 console.log(myTodo);

 const valueTodo = myTodo[myTodo.length]
 console.log(`To-do id: ${valueTodo.id}, ${valueTodo.todo}`);


console.log(1);
let num = Math.floor(Math.random() * 100) + 1;
if (num % 3 ===0) {
  console.log("３の倍数です");
}
else if (num % 5 ===0) {
  console.log("５の倍数です");
}
else if (num % 15 ===0) {
  console.log("3と5の倍数です");
}
else{
  console.log(num);
}
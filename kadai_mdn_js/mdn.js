const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const result = year + '年' + month + '月' + date + '日';
console.log(result);

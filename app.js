let box = document.getElementById("pass");
let lenght = 12;
let co = document.getElementById("copy");
console.log(co);

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()_+~|}{[]<>/-=";

let allchars = uppercase + lowercase + number + symbol;

function createpassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  co.innerHTML = "<i style=' font-size: 30px;cursor: pointer;' class='fa-solid fa-copy'></i>";

  box.value = password;
}

function copy() {
  box.select();
  document.execCommand("copy");
  co.innerHTML = "<i style=' font-size: 30px;' class='fa-solid fa-check'></i>";
}

AOS.init();

console.log("I am in a separate file");

function updatePhoneNumber(product, isIncrement, price) {
  const input = document.getElementById(product + "-num");
  const inputValue = input.value;

  if (isIncrement == true) {
    input.value = parseInt(inputValue) + 1;
  } else if (inputValue > 0) {
    input.value = parseInt(inputValue) - 1;
  }
  const totalPhone = input.value;
  const phone = document.getElementById(product + "-price");
  const phonePrice = phone.innerText;
  const totalPhonePrice = totalPhone * price;
  phone.innerText = totalPhonePrice;
  totalAmount();
}

function removeProduct(product) {
  const input = document.getElementById(product + "-num");
  const inputValue = input.value;
  input.value = 0;
  const phone = document.getElementById(product + "-price");
  const phonePrice = phone.innerText;
  phone.innerText = 0;
  totalAmount();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-num");
  const productNumber = parseInt(productInput.value);
  console.log(productNumber);
  return productNumber;
}
function totalAmount() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;

  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal * 0.05;
  const total = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}
document.getElementById("plus-btn").addEventListener("click", function () {
  updatePhoneNumber("phone", true, 1219);
});
document.getElementById("minus-btn").addEventListener("click", function () {
  updatePhoneNumber("phone", false, 1219);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updatePhoneNumber("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updatePhoneNumber("case", false, 59);
});
document.getElementById("remove-phone").addEventListener("click", function () {
  removeProduct("phone");
});
document.getElementById("remove-case").addEventListener("click", function () {
  removeProduct("case");
});

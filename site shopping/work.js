let plus = document.querySelectorAll(".plus");
let price = document.querySelectorAll(".price");
let minus = document.querySelectorAll(".minus");
let remove=document.querySelectorAll(".remove")
let total = document.querySelector("#total-price");

plus.forEach((e, i) =>
  e.addEventListener("click", function increment() {
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price[i].innerHTML);
  })
);
minus.forEach((e, i) =>
  e.addEventListener("click", function disincrement() {
    if (parseInt(total.innerHTML) > 0)
      total.innerHTML =
        parseInt(total.innerHTML) - parseInt(price[i].innerHTML);
        if (parseInt (total.innerHTML) <0)
        total.innerHTML=0
  })
);

remove.forEach((e,i)=>e.addEventListener("click", function removeAll() {
 total.innerHTML=0

})
)
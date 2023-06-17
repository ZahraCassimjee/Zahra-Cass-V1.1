let subOrders = [];
makeSub = () => {
  let sTotal = 0;
  //sub name
  let sName = document.getElementById("subName").value;

//bread type
let bread = document.getElementById("bread").value; 
    if(bread === "Honey wheat"){
      sTotal = sTotal + 30;
    } else if(bread === "French loaf"){
      sTotal = sTotal + 40;
    } else if(bread === "Whole wheat"){
      sTotal = sTotal + 50;
    }
 
//toppings
  let fillings = document.getElementsByName("fillings");
  let fillArray = [];
  for (let i = 0; i < fillings.length; i++) {
    if (fillings[i].checked) {
      fillArray.push(fillings[i].value);
      sTotal = sTotal + +fillings[i].dataset.cost;
    }
  }


//sauces
  let sauce = document.getElementsByName("sauceRadio");
  let sauceValue;
  for (let i = 0; i < sauce.length; i++) {
    if (sauce[i].checked) {
        sauceValue = sauce[i].value;
      sTotal = sTotal + +sauce[i].dataset.cost;
    }
  }


  subOrders.push({
    Name: sName,
    Sauce: sauceValue,
    fillings: fillArray,
    Price: sTotal,
  });

  console.log(subOrders)
  document.getElementById("orderCost").innerHTML = "R0.00"
  document.getElementById("subForm").reset();

};



OrderDisplay = () => {

  orderCost = 0; 

  let bread = document.getElementById("bread").value; 
  if(bread === "Honey wheat"){
    orderCost = orderCost + 30;
  } else if(bread === "French loaf"){
    orderCost = orderCost + 40;
  } else if(bread === "Whole wheat"){
    orderCost = orderCost + 50;
  }

  let sauceOption = document.getElementsByName("sauceRadio"); 
  for(let i = 0; i < sauceOption.length; i++){
      if(sauceOption[i].checked){
        orderCost = orderCost + +sauceOption[i].dataset.cost
      }
  }

  let fillOptions = document.getElementsByName("fillings");
  for(let i = 0; i < fillOptions.length; i++){
      if(fillOptions[i].checked){
          realTimePrice = realTimePrice + +fillOptions[i].dataset.cost
      }
  }

  document.getElementById("orderCost").innerHTML = "R" + realTimePrice + ".00"

}


//card display
displaySubOrders = () => {
   
  let area = document.getElementById("displaySubOrders");
  let total = document.getElementById("orderTotal");

    area.innerHTML = "";

  let overallTotal = 0;

  for (let i = 0; i < subOrders.length; i++) {
    let name = subOrders[i].Name;
    let sauce = subOrders[i].Sauce;
    let fillings = subOrders[i].fillings;
    let price = subOrders[i].Price;

    overallTotal += price;

    area.innerHTML += `
    <div class="Ordercard">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p>Size:  ${sauce}</p>
                <p>Ingredients:  ${fillings}</p>
                <p>Total Cost: R${price}.00</p>
              </div>
            </div>
          </div>
          `;


          total.innerHTML = "R" + overallTotal + ".00"
  }
};

checkOut = () => {
      let data = JSON.stringify(subOrders);
      console.log(data)
      localStorage.setItem("SubOrder", data);
      window.location.href = "../pages/checkout.html";
  
    }
displayCheck = () => {
    let data = JSON.parse(localStorage.getItem("SubOrder"));
    let items = document.getElementById("FinalizedOrder");
    let totalArea = document.getElementById("FinalizedPrice");
    
    let FinalizedTotal = 0;
    
    for(let i = 0; i < data.length; i++){
    
        let name = data[i].Name;
        let sauce = data[i].Sauce;
        let fillings = data[i].fillings;
        let price = data[i].Price; 
    
    FinalizedTotal += price;
    
    items.innerHTML += `
    <div class="CardOrderDisplay">
         <p><strong>Name: </strong>${name}</p>
         <p><strong>Size: </strong>${sauce}</p>
         <p><strong>Ingredients: </strong>${fillings.join(", ")}</p>
         <p><strong>Price: </strong>R ${price}</p>
    </div>
    `
    totalArea.innerHTML = "R" + FinalizedTotal + ".00"

        //Hiding the Field that get the Final Premium after discount
        let DiscountDiv = document.getElementById("DiscountTotal");
        DiscountDiv.style.display ="none";
    }
    
    }

    ApplyDiscount = () => {
        let totalPriceInput = document.getElementById("FinalizedPrice").innerHTML;
        let OldTotalDiv= document.getElementById("MainTotal");
        let promoCodeInput = document.getElementById("PromoCode");
        let FinalTotal = document.getElementById("NewPrice");
        let DiscountDiv = document.getElementById("DiscountTotal");
        //GetValue from both input fields 
        var totalPrice = parseInt(totalPriceInput.substring(1));
        var promoValue = promoCodeInput.value;
    

        if (totalPrice !== "") 
        
        {
           
            if (promoValue === "1234") {
               
                var discount = totalPrice * 0.1;
                var newTotal = totalPrice - discount;
               
                //Checking if the newTotal is More than 0 before displaying the final total
                if (newTotal > 0) {

                    //Hiding the Previous Total amount before discount
                    OldTotalDiv.style.display = "none";

                    //Display the Final amount after discount has been applied
                    DiscountDiv.style.display ="block";                  
                    FinalTotal.innerHTML = "R" + newTotal + ".00"

                } else{
                    DiscountDiv.style.display ="none";
                }
              
                
              } else {
                alert("Wrong promo code. Please try again.");
              }
      
        } else{
        alert("Please make sure there is valid Total Price.");
        }

    }
    
    BackToMain = () => {
    
    localStorage.removeItem("SubOrder");
    window.location.href = '../index.html';
    
    }
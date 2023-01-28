let order ={
    deliveryList:[

    ],
    pickupList:[

    ],

    // Add to Dilevry function
    showDelivery(){
        let devpop = document.getElementById("Div-Popup");
        let remcard = document.querySelector(".card");

        let devlist = "";  
        // Adding the Item to Deilivery
        this.deliveryList.forEach(function(order){
            devlist += `<li><img src = "${order.ProductName}">${order.Productjob}</li>`;
            document.querySelector("#dilvery-container").innerHTML = devlist;
        // alert(`Product: ${order.ProductName}, ${order.Productjob}`);
            
       });
        // promt when Item added to dilvery
            
            devpop.classList.add("Div-toogle");
const card = document.querySelectorAll(".card");
            
            // remcard.remove("card");
            // removing card when click but error japun
    for(const removeCard of card) {
        removeCard.addEventListener('click',(event) => {
            event.target.parentNode.parentNode.remove(card);
        });
    }



    },

    // Add to Pick Up function
     showPickup(){
        let pickpop = document.getElementById("Pick-Popup");
        let remcard = document.querySelector(".card");

        
        let picklist = "";  
        // Adding the the item to Pickup
        this.pickupList.forEach(function(order){
            picklist += `<li><img src = "${order.ProductName}">${order.Productjob}</li>`;
            document.querySelector("#pickup-container").innerHTML = picklist;
          
            

       });
        // promt when Item added to pickup

            pickpop.classList.add("Pick-toogle");
            
            // remcard.remove("card");


            

            
    }



}
// function for "onclick del" from html
function del(img, name){

    document.querySelector("#dilvery-container").innerHTML = `<img src = "${img}">`;
    order.deliveryList.push({ProductName: img, Productjob: name});
    order.showDelivery();
}

// function for "onclick pick" from html
function pick(img, name){
    document.querySelector("#pickup-container").innerHTML = `<img src = "${img}">`;
    order.pickupList.push({ProductName: img, Productjob: name});
    order.showPickup();
}


// function for cose devpopup
let devclose = document.getElementById("Div-Popup");

// calling card
// const card = document.querySelectorAll(".card");

function closedev(){
    devclose.classList.remove("Div-toogle");
   
    // // removing card when click but error japun
    // for(const removeCard of card) {
    //     removeCard.addEventListener('click',(event) => {
    //         event.target.parentNode.parentNode.remove(card);
    //     });
    // }
}


// function for cose Pickup
let pickclose = document.getElementById("Pick-Popup");
function closepick(){
    pickclose.classList.remove("Pick-toogle");
}





// =============================================================================



   




let order ={
    deliveryList:[

    ],
    pickupList:[

    ],
    showDelivery(){
        let devlist = "";  
        this.deliveryList.forEach(function(order){
            devlist += `<li>Priduct Name: ${order.ProductName}, Poduct id: ${order.Productjob}</li>`;
            document.querySelector("#dilvery-container").innerHTML = devlist;
        // alert(`Product: ${order.ProductName}, ${order.Productjob}`);
       });
    }
}
function del(img, job){
    document.querySelector("#dilvery-container").innerHTML = `<img src = "${img}">`;
    order.deliveryList.push({ProductName: img, Productjob: job});
    order.showDelivery();
}

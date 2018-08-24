$(document).ready(function() {

var subtotalpurchase = function() {
var itempriceArray= $(".cart-item-unitprice");
var itemqtyArray= $(".item-qty");

  for (var i= 0; i< itemqtyArray.length; i++) {
    var itempriceNum = Number($(itempriceArray[i]).text().replace(/\$/,""));
    var subtotal = ((Number($(itemqtyArray[i]).val()))*itempriceNum).toFixed(2);
      if (subtotal != 0){
        $($(".cart-item-subtotalprice")[i]).text("$" + " " + subtotal);
      } else {
        $($(".cart-item-subtotalprice")[i]).text("$ 0.00");
        }
  }
}

var totalpurchaseAmt = 0;
var totalpurchase = function () {
  var subtotalpurchaseArr = $(".cart-item-subtotalprice")
  for (var j = 0; j < subtotalpurchaseArr.length; j++) {
    totalpurchaseAmt = totalpurchaseAmt + Number($(subtotalpurchaseArr[j]).text().replace(/\$/,""))
    if (totalpurchaseAmt != 0){
      $($("#total-purchase-amt")).text("$" + " " + totalpurchaseAmt.toFixed(2));
    } else {
      $($("#total-purchase-amt")).text("$ 0.00");
    }
  }
}

$(document).on("click", ".item-qty", function(){
  subtotalpurchase();
  totalpurchase();
  // console.log($($(".cart-item-subtotalprice")[0]).text());
});

var additem = function() {
  var newItemPriceA = Number($(".newItemPrice").val()).toFixed(2)
  $(".cart-menu-item").prepend('<div class= "cart-item" id= "item-details"> \
    <div class= "cart-item-name">' +  $(".newItem").val() + '</div> \
    <div class="cart-item-unitprice"> $ ' + newItemPriceA + '</div> \
    <div class="cart-item-qtyinput"><input class="item-qty" type = "number" min="0" max="20"></div> \
    <div class="cart-item-subtotalprice">$ 0.00</div> \
    <div class ="cart-item-action"><button class="cart-del-btn">Delete</button></div> \
  </div>');
}
$(document).on("click", ".cart-add-btn", function() {
  additem();
})

$(document).on("click", ".cart-del-btn", function() {
  $(this).parents('.cart-item').remove();
  sum();
});


})

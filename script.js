//preventDefault, then to store the value that user submits as the const "item", then append that to the shopping-list
$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    $(".shopping-list").append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)});
// (do i need to figure out how to remove the text inputted into the add item box after "Add Item" is clicked?)



// add the class ".shopping-item__checked" to a shopping-item-toggle button is pressed 

$(".shopping-list").on("click", ".shopping-item-toggle", function (event)  {
  const check = $(this).closest('div').siblings('.shopping-item');
  $(check).toggleClass("shopping-item__checked")
  });
// change button-label text from "check" to "unchecked"?



//delete the item when the shopping-item-delete button is pressed 

$(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    this.closest("li").remove()
  })

});

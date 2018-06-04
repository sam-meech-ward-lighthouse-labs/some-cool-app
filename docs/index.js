$(() => {
  var jazzHands = $('#jazz-hands-header');

  jazzHands.on('click', (event) => {
    alert("Jazz Hands");

    var newelement = $("<h1>");
    newelement.text( "New Lemenet");
    $('body').append(newelement);
  });
  
  var modal = document.querySelector('.modal');
  $(modal).modal();
  var instance = M.Modal.getInstance(modal);

  $('#cat-image').on("click", () => {
    instance.open();
    $('.carousel').carousel();
  })

});
$(function() {
  $(".change-hunger").on("click", function(event) {
    var id = $(this).data("id");
    var hunger = $(this).data("hunger");

    var hungerState = {
      devoured: hunger
    };
    console.log(id);
    console.log(hungerState);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: hungerState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log(newBurger)
        location.reload();
      }
    );
  });

  $('delete-burger').on('click', function(event) {
    let id = $(this).data('id');

    $.ajax('/api/burgers/' + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});

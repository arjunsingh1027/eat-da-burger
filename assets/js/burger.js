// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".delete").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    // delete request
    $.ajax({
      url: "/api/delete-burgers/" + id,
      method: "DELETE",
    }).then(function () {
      console.log("Burger deleted");
      location.reload();
    });
  });


  $(".devour").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    // PUT request
    $.ajax({
      url: "/api/eat-burgers/" + id,
      method: "PUT",
    }).then(function () {
      console.log("Burger eaten");
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    let burger = {
      burger_name: $("#burg").val().trim()
    }
    console.log(burger);

    // POST request
    $.ajax({
      url: "/api/add-burgers/",
      method: "POST",
      data: burger,
    }).then(function () {
      console.log("Burger added");
      location.reload();
    })
  })
});

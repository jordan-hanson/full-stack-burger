$("#burgerbutton").on('click', function () {
    event.preventDefault();


    var newBurger = {
        burger_name: $("#burger_name").val(),
        devoured: false,
    }

    $.ajax({
        url: "/api/burgers",
        type: "POST",
        data: newBurger
    }).then(function (data) {
        location.reload()
    })
    console.log("new burger", newBurger)
})
$("#devoured").on("click", function () {
    event.preventDefault();

    var devoured = {
        devoured: true,
    };

    $.ajax({
        url: "/api/burgers/:id",
        type: "PUT",
        data: devoured
    }).then(function () {
        location.reload();
    })
    console.log("it is devoured", devoured)
})

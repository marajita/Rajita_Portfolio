$(document).ready(function () {

    $('.carousel').carousel();


    // Initial Values
    var name = "";
    var email = "";
    var message = "";
    // Capture Button Click
    $("#contactMe").on("click", function (event) {
        event.preventDefault();

        // Grabbed values from text-boxes
        name = $("#name-input")
            .val()
            .trim();
        email = $("#email-input")
            .val()
            .trim();
        message = $("#message-input")
            .val()
            .trim();
        console.log(name + " | " + email + " | " + message);
        // Code for "Setting values in the database"
        if (name.length > 0 && email.length > 0 && message.length > 0) {
            // post

            var newInfo = {
                name: name,
                email: email,
                message: message
            };

            $.post("/api/information", newInfo, function (data) {
                if (!data) {
                    window.Materialize.toast("Failed!!", 2000, "deep-orange accent-3");
                    console.log("Errors handled: " + error.code);
                } else {
                    window.Materialize.toast("I got your message", 2000, "green");

                    //reset fields
                    $("#name-input").val("");
                    $("#email-input").val("");
                    $("#message-input").val("");
                }

            });

        } else {
            window.Materialize.toast(
                "All fields are required!!",
                2000,
                "red darken-1"
            );
        }

    });
});
$(document).ready(function() {
    var bool = true
    $(".form-control").on("keyup", function(e) {
        if (e.keyCode == 13) {
            var textInput = $(".form-control").val()
            $(".form-control").val("")
            var newDiv = $("<div> ")
            newDiv.attr("class", "form-control")
            newInput = $('<input type="checkbox" class="toggle">')
            $(newDiv).append(newInput)
            var newLabel = $("<label> " + textInput + " </label>")
            newInput.attr("class", "left")
            $(newDiv).append(newLabel)
            $(newInput).on("click", function() {
                $(newLabel).attr("class", "format");

            })


            $(".wrapper").append(newDiv)
        }
    })

}) + -
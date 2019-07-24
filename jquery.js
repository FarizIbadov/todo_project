doings = [];

function addActivity(t) {
    a = {
        text: t,
        status: 'active'
    }
    doings.push(a)
}

function changeStatus(index) {
    if (doings[index].status == "active")
        doings[index].status = "Completed"
    else
        doings[index].status = "active"
    showList()
}

function deleteActivity(index) {
    console.log(index)
    doings.splice(index, 1)
    showList()


}



function addDelete() {
    var deleteBtn = $('<span class="glyphicon glyphicon-minus pointer">-</span> ')
    deleteBtn.addClass("right")
    $(deleteBtn).hide()

    $(".show").on("mouseover", function() {
        $(deleteBtn).show()
    })
    $(".show").on("mouseleave", function() {
        $(deleteBtn).hide()
    })
    $(deleteBtn).on("click", function() {
        deleteActivity($(this).parent().data("nomre"))
    })
    newLine.append(deleteBtn)
}


function addCheckbox(i) {
    CheckBox = $("<input type='checkbox'  data-checknum='" + i + "' class='toggle'>")
    CheckBox.attr("class", "left")
    $(newLine).prepend(CheckBox)

}
$(document).on("click", ".left", function() {
    changeStatus($(this).data("checknum"))
})

function showList() {
    $(".show").html("");
    $(".remaining-items").text(" " + doings.length + "item ")
    for (let i = 0; i < doings.length; i++) {
        newLine = $("<div class='form-control' data-nomre='" + i + "'>")
        newLine.html(doings[i].text)
        addCheckbox(i)
        newLine.attr("class", doings[i].status)

        newLine.addClass('form-control')

        addDelete()
        $(".show").append(newLine)
    }
}

function showCompleted() {
    for (let i = 0; i < doings.length; i++) {
        if (doings[i].status == 'active') {
            $(".active").hide('slow')
            $(".Completed").show('slow')

        }
    }
}

function showActive() {
    for (let i = 0; i < doings.length; i++) {
        if (doings[i].status == 'active') {
            $(".Completed").hide('slow')
            $(".active").show('slow')

        }
    }
}


$(document).ready(function() {
    $(".form-control").on("keyup", function(e) {
        if (e.keyCode == 13) {

            if ($(".form-control").val() != "") {
                var text = $(".form-control").val()
                $(".form-control").val("")
                addActivity(text)
                showList()
            }
        }
    })
    $(".completed").on("click", function() {
        showCompleted()
    })
    $(".Active").on("click", function() {
        showActive()
    })
    $(".All").on("click", function() {
        showList()
    })
})
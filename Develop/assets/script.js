
var currentDate = moment().format("DD MM YYYY hh:mm:ss");
var colorTime = moment().format("k")

$(document).ready(function () {
    setInterval(function () {
        currentDate = moment().format("DD MM YYYY hh:mm:ss");
        colorTime = moment().format("k")
        $("#date").text(currentDate)
    }, 1000)
    function timeShade() {
        $(".time-block").each(function () {
            var hour = parseInt($(this).closest(".row").attr("id"))

            if (hour > colorTime) {
                $(this).addClass("future")
            } else if (hour === colorTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("past")
            }
        })

    }
    //on save btn send to local storage
    $(".saveBtn").on("click", function () {
        $(this).siblings(".description").val()
        var timeBlock = $(this).closest(".row").attr("id");

        localStorage.setItem(timeBlock, planLog);
    })
    //run through each row and retrieve the local storage
    $(".row").each(function() {
        var hour = $(this).attr("id");
        var planInput = localStorage.getItem(hour);
    
        if(!planInput) {
          return;
        } else {
          $(this).children(".description").val(planInput);
        };
      })

    timeShade()
});

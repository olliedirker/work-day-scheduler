
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
    $(this).siblings(".description").val()
    timeShade()
});

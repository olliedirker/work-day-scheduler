
//variable that formats the date and time
var currentDate = moment().format("DD MM YYYY hh:mm:ss");
var colorTime = moment().format("k")
//function that deploy the counting every second as well as 
$(document).ready(function () {
    setInterval(function () {
        currentDate = moment().format("DD MM YYYY hh:mm:ss");
        colorTime = moment().format("k")
        $("#date").text(currentDate)
    }, 1000)
    function timeShade() {
        $(".time-block").each(function () {
            var hour = parseInt($(this).closest(".row").attr("id"))
            //assignes the css features to time the colors of the day
            if (hour > colorTime) {
                $(this).addClass("future")
            } else if (hour === colorTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("past")
            }

        });            $(".saveBtn").on("click", function () {
            $(this).siblings(".description").val()
            var timeBlock = $(this).closest(".row").attr("id");

            localStorage.setItem(timeBlock, planLog);

            //run through each row and retrieve the local storage
            $(".row").each(function () {
                var hour = $(this).attr("id");
                var planInput = localStorage.getItem(hour);

                if (!planInput) {
                    return;
                } else {
                    $(this).children(".description").val(planInput);
                };
            })
        });

    }
    //on save btn send to local storage

    //executes timeShade for the first time
    timeShade()
});

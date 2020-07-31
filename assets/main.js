$(".saveBtn").on("click", function(){
    var userData = $(this).siblings("input").val()
    var timeBlock = $(this).parent().attr("id")
    console.log(userData,timeBlock)
    localStorage.setItem(timeBlock, userData)
})
var currentTime = moment().hour()
    for (let i = 8; i <= 16; i++) {
        const element = localStorage.getItem(i);
        $(`#${i}-input`).val(element)
        if (currentTime > i ){
            $(`#${i}`).addClass("bg-info text-light")
            console.log("Have a good morning!")
        } else if (currentTime == i ){
            $(`#${i}`).addClass("bg-warning")
            console.log("Hey")
        } else {
            $(`#${i}`).addClass("bg-success")
            console.log("Have a night")
        }

    }
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#todaysDate").append(todaysDate)






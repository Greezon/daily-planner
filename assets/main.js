$(".saveBtn").on("click", function(){
    var userData = $(this).siblings("input").val()
    var timeBlock = $(this).parent().attr("id")
    console.log(userData,timeBlock)
    localStorage.setItem(timeBlock, userData)
})
var currentTime = moment().hour
    for (let i = 8; i <= 16; i++) {
        const element = localStorage.getItem(i);
        $(`#${i}-input`).val(element)
        if (currentTime > i ){
            $(`#${i}`).addClass("bg-danger")
        } else if (currentTime == i ){
            $(`#${i}`).addClass("bg-warning")
        } else {
            $(`#${i}`).addClass("bg-success")
        }
    }
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#todaysDate").append(todaysDate)




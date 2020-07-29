$(".saveBtn").on("click", function(){
    var userData = $(this).siblings("input").val()
    var timeBlock = $(this).parent().attr("id")
    console.log(userData,timeBlock)
    localStorage.setItem(timeBlock, userData)
})
    for (let i = 8; i <= 16; i++) {
        const element = localStorage.getItem(i);
        $(`#${i}-input`).val(element)
    }
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#todaysDate").append(todaysDate)


$(".saveBtn").on("click", function(){
    var userData = $(this).siblings("input").val()
    var timeBlock = $(this).parent().attr("id")
    console.log(userData,timeBlock)
    localStorage.setItem(timeBlock, userData)
})


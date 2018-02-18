$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(100, function(){
		$(this).remove();
		

	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(e){
	var keyPressed = e.keyCode;

	if(keyPressed === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText +"</li>");
		
	}
});

$(".add-btn").on("click", function(){
	$("input[type='text']").slideToggle(500);
});

$("ul").on("mouseenter", "li", function(){
	$(this).children().css("width", "40px");
	$(this).children().css("opacity", "1.0");
})

$("ul").on("mouseleave", "li", function(){
	$(this).children().css("width", "0");
	$(this).children().css("opacity", "0");
})
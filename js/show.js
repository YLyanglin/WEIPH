;(function($){
	$(".left-icon").on("tap",function(){
		$(".container").css({
			"-webkit-transform":"translate3d(90%,0,0)",
			"-webkit-transition":"2s"
		})
	})
	$(".main").on("tap",function(){
		$(".container").css({
			"-webkit-transform":"translate3d(0,0,0)",
			"-webkit-transition":"2s"
		})
	})
	
})(Zepto)
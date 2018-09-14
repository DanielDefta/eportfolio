$(document).ready(function(){
	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.vertical.menu').toggle();

	});
	
		$('.dropdown').dropdown({
			transition: 'slide down',
			action: 'hide'
		});
});

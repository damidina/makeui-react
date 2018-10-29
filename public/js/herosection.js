$(function() {
	makeui();
	$(".hero-section").css("background", randColor());
	function makeui() {
	    $("#btn-makeui").click(function () {
	    	$(".arm").removeClass("start");
        	var handYBottomPos = $("#hand").offset().top + 112;
        	var dist1 = $("#btn-makeui").offset().top - handYBottomPos;
        	
        	$.keyframe.define([{
			    name: 'armmove',
			    '0%': {'transform': 'translate()'},
			    '50%': {'transform': 'translate(-26px,'+dist1+'px)'},
			    '50%': {'transform': 'translate(-26px,'+dist1+'px)'},
			    '100%': {'transform': 'translate()'},
			}]);

			$(".rect-button-top").addClass("button-pressed");

        	$(".arm").playKeyframe({
			    name: 'armmove', 
			    duration: '1s',
			    timingFunction: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)', 
			    delay: '0s', 
			    
			    complete: function(){
			    	$(".hero-section").css("background", randColor());
					$(".round-makeui").toggleClass("square");
					$(".square-makeui .rect").toggleClass("round");
					$(".rand-border-radius").css("border-radius",randBorderRadius());
					$(".rand-border-radius-2").css("border-radius",randBorderRadius2());
					$(".rand-border-radius-3").css("border-radius",randBorderRadius3());
			    } 
			});

	    	setTimeout(function(){  
		    	 $(".rect-button-top").removeClass("button-pressed"); 
	    	}, 1000);
		});
	}
	function randColor() {
			var hue = Math.floor(Math.random()*360);
	    var saturation = Math.floor(Math.random()*(65-50+1)+50);
	    var lightness = Math.floor(Math.random()*(85-75+1)+75);
	    var hslText = "hsl("+hue+","+saturation+"%,"+lightness+"%)";      			
	    return hslText;
	}

	function randBorderRadius() {
		var borderRadius = [0,20,50];
		var rand = Math.floor(Math.random()*borderRadius.length);
		return borderRadius[rand];
	}

	function randBorderRadius2() {
		var borderRadius = [0,5,50];
		var rand = Math.floor(Math.random()*borderRadius.length);
		return borderRadius[rand];
	}

	function randBorderRadius3() {
		var borderRadius = [0,5,15,20];
		var rand = Math.floor(Math.random()*borderRadius.length);
		return borderRadius[rand];
	}

	let xs = [];
		for (var i = 0; i <= window.innerWidth;i++) {
			xs.push(i);
		}

		function wave() {
			let points = xs.map(x => {
				let y = 100+20 * Math.sin((x)/5);
				return[x, y]
			});

			let path = "M" + points.map(p => {
				return p[0] + "," + p[1]
			}).join("L");
			$("path#wavepath").attr("d",path);
		}
	wave(); 
});

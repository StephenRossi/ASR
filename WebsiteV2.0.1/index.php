<?php
	include 'header.php';
?>
	<div id="bodyOne">
		<img src="underDev.png">
	</div>
	<div id="bodyTwo">
		<div id="des">
			 ASR Technology is a business designed to create products and services that are more practical, effective, and adventageous to the average consumer 
		</div>
		<hr/>
		<div id="subscribe">
			Subscribe to stay up to date and receive news, notifications, and deals.
		</div>
		<form method="POST" action="/includes/addSubscriber.inc.php">
			<input id="subEmail" type="text" name="subEmail" placeholder="example@somesite.com">
			<input id="subBut" type="submit" name="subBut" value="Subscribe">
		</form>
	</div>
	<div id="bodyThree">
		<div id="slideBox"> 
			<div class="mySlides fade">
 				<img src="testImg1.jpg" style="width:100%">
			</div>

			<div class="mySlides fade">
 	 			<img src="testImg2.jpg" style="width:100%">
			</div>

			<div class="mySlides fade">
 		 		<img src="testImg3.jpg" style="width:100%">
			</div>
			<div id="prevSlide" onclick="plusSlides(-1)">&#10094;</div>
 			<div id="nextSlide" onclick="plusSlides(1)">&#10095;</div>
			<div style="text-align:center; z-index: 1;">
  				<div class="dot" onclick="currentSlide(1)"></div> 
  				<div class="dot" onclick="currentSlide(2)"></div> 
 				<div class="dot" onclick="currentSlide(3)"></div> 
			</div>
		</div>
		<div class="divider"></div>
		<div id="productsDesc"> ASR Technology brand products will include new and advanced hardware, software, gadgets, technology, accessories and so much more that will be available online. Currently none of our products are ready for realease or purchase, but if you are subscribed you will receive an email when a product is launched and goes live on our stores. </div>
	</div>
	<div id="bodyFour">
		<div id="serviceOne"> </div>
		<div class="dividerB4"> </div>
		<div id="serviceTwo"> </div>
		<div class="dividerB4"> </div>
		<div id="serviceThree"> </div>
	</div>
	<div id="bodyFive">

	</div>
	<div id="footer">

	</div>
</body>
	<script type="text/javascript">

		var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
  			showSlides(slideIndex += n);
		}
		function currentSlide(n) {
 			 showSlides(slideIndex = n);
		}
		function showSlides(n) {
 			var i;
  			var slides = document.getElementsByClassName("mySlides");
  			var dots = document.getElementsByClassName("dot");
  			if (n > slides.length) {slideIndex = 1} 
  			if (n < 1) {slideIndex = slides.length}
  			for (i = 0; i < slides.length; i++) {
      			slides[i].style.display = "none"; 
  			}
  			for (i = 0; i < dots.length; i++) {
      			dots[i].className = dots[i].className.replace(" active", "");
  			}
  			slides[slideIndex-1].style.display = "block"; 
  			dots[slideIndex-1].className += " active";
		}


		$("#homeBut").click(function() {
    		$('html,body').animate({
        		scrollTop: $("#bodyOne").offset().top},
        		'slow');
		});
		$("#descBut").click(function() {
    		$('html,body').animate({
        		scrollTop: $("#bodyTwo").offset().top},
        		'slow');
		});
		$("#productsBut").click(function() {
    		$('html,body').animate({
        		scrollTop: $("#bodyThree").offset().top},
        		'slow');
		});
		$("#servicesBut").click(function() {
    		$('html,body').animate({
        		scrollTop: $("#bodyFour").offset().top},
        		'slow');
		});
		$("#contactBut").click(function() {
    		$('html,body').animate({
        		scrollTop: $("#bodyFive").offset().top},
        		'slow');
		});

		$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
       $("header").removeClass("active");
    }
});
	</script>
</html>
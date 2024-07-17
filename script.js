


<script>
           $(document).ready(function(){
               //scroll slides on swipe for touch enabled devices
               $(".banner-container").on("touchstart", function(event){
                   var yClick = event.originalEvent.touches[0].pageY;
                   $(this).one("touchmove", function(event){
                       var yMove = event.originalEvent.touches[0].pageY;
                       if( Math.floor(yClick - yMove) > 1 ){
                           $(".banner-container").carousel("next");
                       }
                       else if( Math.floor(yClick - yMove) < -1 ){
                           $(".banner-container").carousel("prev");
                       }
                   });
                   $(".banner-container").on("touchend", function(){
                       $(this).off("touchmove");
                   });
               });
           });

  $(window).bind("load", function() {
  	$("#carousel").carousel({
  		interval: 3000,
  		pause: "hover"
  	})

  	$("#carousel").hover(function() {
  		$(this).carousel("pause");
  	}, function() {
  		$(this).carousel("cycle");
  	});
  });

  // scroll slides on mouse scroll
  $('#carousel').bind('mousewheel DOMMouseScroll', function(e){
  	if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
  		$(this).carousel('prev');
  	}
  	else{
  		$(this).carousel('next');
  	}
  });
</script>

<!-- THESE NEXT COMMENTED SECTIONS ARE SPECIFIC FOR BOOTSTRAP AND BROWSER SUPPORT -->

<!-- HTML5 shim, IE9,  and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->

<!-- specific to Bootstrap for Internet Explorer 10 in Windows 8 and Windows Phone 8 -->
<!--[if lt IE 11]>
  <style>
    @-webkit-viewport { width:device-width; }
       @-moz-viewport { width:device-width; }
        @-ms-viewport { width:device-width; }
         @-o-viewport { width:device-width; }
            @viewport { width:device-width; }
  </style>
<![endif]-->

<script>
  // SPECIFIC TO BOOTSTRAP
  // For Internet Explorer 10 in Windows 8 and Windows Phone 8
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
          document.createTextNode(
              '@-ms-viewport{width:auto!important;}'
          )
      )
      document.querySelector('head').appendChild(msViewportStyle)
  }
</script>
<!-- END OF BOOTSTRAP AND BROWSER SPECIFIC JS -->

<!-- A fix for the iOS orientationchange zoom bug.
             Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License. https://github.com/scottjehl/iOS-Orientationchange-Fix
        -->
<script>
  (function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this);
</script>
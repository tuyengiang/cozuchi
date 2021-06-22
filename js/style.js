$(function () {
    
    if ($('.owl-carousel-project').length > 0) {
        var $owl = $('.owl-carousel-project');
        $owl.owlCarousel({
            loop: true,
            nav: true,
            navText: '',
            dots: false,
            margin: 40,
            autoplay: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    stagePadding: 40
                },
               
                376: {
                    items: 1,
                    margin: 20,
                    stagePadding: 40
                },
                404: {
                    items: 1,
                    margin: 25,
                    stagePadding: 55
                },
                435: {
                    items: 1,
                    margin: 30,
                    stagePadding: 75
                },
                768: {
                    items: 2,
                    margin: 30
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    if ($('.owl-carousel-voice').length > 0) {
        var $owl = $('.owl-carousel-voice');
        $owl.owlCarousel({
            loop: true,
            nav: true,
            navText: '',
            dots: false,
            margin: 50,
            autoplay: false,
            animateOut: 'fadeOut',
             animateIn: 'fadeIn',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                    stagePadding: 50
                },
                376: {
                    items: 1,
                    margin: 30,
                    stagePadding: 75
                },
                768: {
                    items: 2,
                    margin: 30
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    $(".mobile_menu").slideMobileMenu({

        onMenuLoad: function (menu) {

            console.log(menu)

        },

        onMenuToggle: function (menu, opened) {

            console.log(opened)

        }

    });
});

jQuery(document).ready(function ($) {
    if ($('#jssor_1').length > 0) {
        var jssor_1_SlideshowTransitions = [{
            $Duration: 1000,
            x: -0.3,
            $During: {
                $Left: [0.3, 0.7]
            },
            $Easing: {
                $Left: $Jease$.$InCubic,
                $Opacity: $Jease$.$Linear
            },
            $Opacity: 2
        }, {
            $Duration: 1000,
            x: 0.3,
            $SlideOut: true,
            $Easing: {
                $Left: $Jease$.$InCubic,
                $Opacity: $Jease$.$Linear
            },
            $Opacity: 2
        }];
    
        var jssor_1_options = {
            $AutoPlay: 1,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
            }
        };
    
        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
        /*#region responsive code begin*/
    
        var MAX_WIDTH = 3000;
    
        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;
    
            if (containerWidth) {
    
                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
    
                jssor_1_slider.$ScaleWidth(expectedWidth);
            } else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
    
        ScaleSlider();
    
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    } 
   
});
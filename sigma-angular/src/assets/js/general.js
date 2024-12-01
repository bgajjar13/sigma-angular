var $ = jQuery.noConflict();
	$(document).ready(function(){
		$(function () {
		    $('.selectpicker').selectpicker();
		    $(".dropdown-toggle").dropdown();
		});	
      $('.theme-btn').on('click', function () {
        // Check current theme
        const currentTheme = $('body').attr('data-theme');
        
        // Toggle between 'light' and 'dark'
        if (currentTheme === 'light') {
          $('body').attr('data-theme', 'dark');
        } else {
          $('body').attr('data-theme', 'light');
        }
      });
	});


/* !Scripts (Author: jan@luks.sk) */

/**
 * Tabs
 * @param object $links
 * @param object $contents
 */

var tabs = function($links, $contents) {

  // Default contents
  $contents.hide().first().show();

  // Default links
  $links.first().addClass('--active');

  // Set link
  var $link;

  // Click
  $links.on('click', function(event) {

    // Prevent default
    event.preventDefault();

    // Save link
    $link = $(this);

    // Switch links
    $link.addClass('--active').siblings().removeClass('--active');

    // Switch contents
    $contents.hide().filter($link.attr('href')).show();

  });

}

// Ready
$(document).ready(function() {

  // Set tabs
  var $tabs;

  // tabs
  $('.tabs').each(function() {

		// Save tabs
		$tabs = $(this);

		// Init new tabs
		tabs($tabs.find('.tabs__nav a'), $tabs.find('.tabs__content'));

  });

  // Scroll
	$(document).on('click', '.link--anchor > a', function(event) {

		// Prevent default
		event.preventDefault();

		// Animate
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'swing');

	});

	// Copy
	$(document).on('click', '.tabs__copy', function() {

		// Get anchor
		var $anchor = $(this).parent().find('a.--active');

		// Copy text
		navigator.clipboard.writeText($($anchor.attr('href')).text());

		// If executed properly
		if(document.execCommand('copy')) {

			// Set new text
			$(this).text('Zkopírováno');

			// Set text back
			setTimeout(function() {
				$('.tabs__copy').text('Copy');
			}, 1000);

		}

	});


  // tabs__wrapper
  $('.tabs__wrapper').each(function() {

    // Set tabs__wrapper
    var $tabs__wrapper = $(this);

    // Check height
    if($tabs__wrapper.height() > 400) {

      // Add class
      $tabs__wrapper.addClass('tabs__wrapper--collapses');

      // Click
      $tabs__wrapper.on('click', function(event) {

        // Remove class
        $tabs__wrapper.removeClass('tabs__wrapper--collapses');

      });

    }

  }); 


});
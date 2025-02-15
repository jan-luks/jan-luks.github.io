/* !Ulohy (Author: jan@luks.sk) */

/**
 * In array
 * @param mixed needle
 * @array haystack
 * @return bool
 */

 function in_array(needle, haystack) {

  // Get arraylength
  var length = haystack.length;

  // Loop
  for(var i = 0; i < length; i++) {

    // Check value and return
    if(haystack[i] == needle) return true;
  
  }

  // Return
  return false;

}


/**
 * Copy array
 * @param array array
 * @return array
 */

 function copy_array(array) {

  // Set result
  var result = [];

  // Loop through array
  $.each(array, function(key, value) {

    // Set value
    result.push(value);

  });

  // Return
  return result;

}

/**
 * Filter JSON
 * @param object json
 * @param object data
 * @return object
 */

var filter_json = function(ulohy, data) {

  // Copy ulohy
  var result = copy_array(ulohy);

  // Loop through ulohy
  $.each(ulohy, function(index, value) {

    // Check difficulty
    if(data.difficulty && data.difficulty !== value.params.difficulty)
      delete result[index];

    // Check theme
    $.each(data.theme, function(i, v) {

      // Check theme
      if(!in_array(v, value.params.theme))
        delete result[index];

    });

    // Check time
    if(data.time && data.time !== value.params.time)
      delete result[index];

  });

  // Return
  return result;

}

/**
 * Append ulohy
 * @param object $to
 * @param array ulohy
 * @param string template
 * @param object $empty
 * @return object
 */

var append_ulohy = function($to, ulohy, template, $empty) {

  // Clear to
  $to.html('');

  // Set counter
  var counter = 0;

  // Loop through ulohy
  $.each(ulohy, function(key, value) {

    // Check
    if(value !== undefined) {

      // Clone template
      var tpl = template;

      /// Increase counter
      counter++;

      // Replace some tags
      tpl = tpl.replace('%description', value.excerpt)
                .replace('%title', value.name)
                  .replace('%url', value.url);

      // Append
      $to.append(tpl);


    }

  });

  // Show
  if(counter) {
    $empty.hide();
  }
  
  // Hide
  else {
    $empty.show();
  }

}

// Ready
$(document).ready(function() {

  // Set form, reset
  var $form = $('form'), $empty = $('#empty').hide();

  // Set selects
  var selects = {
    difficulty: $('#difficulty'),
    theme: $('#theme'),
    time: $('#time')
  };
  
  // Set values
  var values = {
    difficulty: '',
    theme: [],
    time: ''
  };

  // Set filtered
  var filtered;

  // Load template
  var template = $('#template').html(), $result = $('#result');

  // Append ulohy
  append_ulohy($result, json.ulohy, template, $empty);

  // Loop through translator
  $.each(json.translator, function(key, value) {

    // Loop through individuals
    $.each(value, function(k, v) {

      // Fill select with options
      selects[key].append('<option value="' + k + '">' + v + '</option>');

    });

    // On form change
    $form.on('change', function() {

      // Loop through selects
      $.each(selects, function(key, value) {

        // Set value
        values[key] = value.val();

      });

      // Filter JSON
      filtered = filter_json(json.ulohy, values);

      // Append ulohy
      append_ulohy($result, filtered, template, $empty);

    });

    // On form reset
    $form.on('reset', function() {

      // Append ulohy
      append_ulohy($result, json.ulohy, template, $empty);

    });

  });

});
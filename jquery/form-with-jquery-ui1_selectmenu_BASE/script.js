$( "#location" ).selectmenu({
  change : function(event, ui) {
    updateProgress()
  }
});
var availableTags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme"
];
$( "#category" ).autocomplete({
  source: availableTags,
  change : function(event, ui) {
    updateProgress()
  }

});

var spinner = $( "#experience" ).spinner({
  max:10,
  min: 0,
  step:2,
  change: function( event, ui ) {
    updateProgress()
  }


});

// $( "#date" ).datepicker( "setDate", new Date() );

$( "#date" ).datepicker({
  minDate: new Date(),
  maxDate : "+2w",
  dateFormat: "mm-dd-yy"
});
$('#date').change(function () {
  updateProgress()
})
$( "input[type='radio']" ).change(function() {
  updateProgress()
})

$( "input[type='radio']" ).checkboxradio();



$('#submit').button({
  disabled: true
})

$( "#progress" ).progressbar({
  value: 0
});

function updateProgress() {
  let itemCount = $('.ui-widgets').length;
  let itemCompleted = 0;
  let progress = 0;

  let location = $('#location option:selected').val();
  let category = $('#category').val();
  let experience = $('#experience').val();
  let date = $('#date').val();
  let referrer = $('input[type="radio"]:checked').val();

  if(location) itemCompleted++
  if(category) itemCompleted++
  if(experience) itemCompleted++
  if(date) itemCompleted++
  if(referrer) itemCompleted++

  progress = itemCompleted / itemCount * 100

  $( "#progress" ).progressbar( "value", progress );

  $( ".percent span").text(progress)

  if(progress === '100')  $('#submit').button('enable')
  else $('#submit').button('disable')
    
  
}


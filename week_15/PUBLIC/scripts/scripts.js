$(document).ready(function() {


//Filter work samples based on which li item is selected
$('ul#filter a').click(function() {

$('ul#filter .current').removeClass('current');
$(this).parent().addClass('current');


var filterVal = $(this).text().toLowerCase().replace(' ','-');

if(filterVal == 'all') {
  	$('ul.samples li.hidden').show('slow').removeClass('hidden');	
}

else {
  $('ul.samples li').each(function() {
    if(!$(this).hasClass(filterVal)) {
      $(this).hide('slow').addClass('hidden');
    } 
    else {
      $(this).show('slow').removeClass('hidden');
    }
  });
}


  return false;
});

});
var APIurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
var searchInput ="";



$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   $('#random-btn').on('click', function(event) {
     window.open('https://en.wikipedia.org/wiki/Special:Random');
   });
   //When press enter in input button click event fires
   $('#search-input').keypress(function(e){
     if(e.which===13){
       $("#search-btn").click();
     }
   });
   $('#search-btn').on('click', getSearch);
});

function getSearch(){
  searchInput = $('#search-input').val();
  $.ajax({
    url: APIurl + searchInput,
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
      console.log(data);
       $('#list-results').empty();
      for (var i = 0; i < data[1].length; i++) {
        $('#list-results').append("<li><h3><a href='" + data[3][i] + "' target='_blank'>" + data[1][i] + "</a></h3><p>" + data[2][i] + "</p></li>");
      }
    }
  });
}

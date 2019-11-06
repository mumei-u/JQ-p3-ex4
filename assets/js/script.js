$(function(){
  $('#addMore').click(function(){
    
    $('#rectangle').css('height', $('#rectangle').height() + 10);
    // si height depasse 100 il reviendra a 10px
    if ($('#rectangle').height() > 100) {
      $('#rectangle').css('height', '10px')
    }
  });
  // change la couleur de fond en vert
  $('#green').click(function(){
    $('#rectangle').css('background', 'green')
  });
  // remet la couleur par défaut
  $('#none').click(function(){
    $('#rectangle').css('background', 'none');
  });
  // cacher l'élément
  $('#hide').click(function(){
    $('#rectangle').hide();
  });
  // afficher l'élément
  $('#show').click(function(){
    $('#rectangle').show();
  });
});

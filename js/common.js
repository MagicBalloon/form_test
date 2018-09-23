jQuery(document).ready(function($) {
  var $form = $('form.contact');

  // First progress bar
  (function(){
    var $inputs = $form.find('input[required]'),
        $progress = $form.find('.progress-bar.first'),
        pState = 0,
        pStateP = 0;

    $inputs.on('change', function() {
      pState = $inputs.filter(function(e){return $(this).val().trim().length}).length;
      pStateP = progressInPercentage(pState, 3);
      $progress.attr('aria-valuenow', pStateP);
      $progress.attr('style', 'width: '+pStateP+'%;');
      $progress.text(pStateP + '%');
    });
  })();


  // Second progress bar
  (function(){
    var $btn = $('#progress-btn'),
        $input = $('#progress-num'),
        $progress = $form.find('.progress-bar.second');

    $input.on('change', function() {
      var e = $(this),
          val = parseInt(e.val());

      if (val < 0 || !val) val = 0;
      else if (val > 100) val = 100

      e.val(val);
    });

    $btn.on('click', function() {
      var val = $input.val();

      $progress.attr('aria-valuenow', val);
      $progress.attr('style', 'width: '+val+'%;');
      $progress.text(val + '%');
    });
  })();


  // Resume toggle button
  (function(){
    var $btn = $form.find('#resume-btn');
    var $block = $form.find('#resume');

    $btn.on('click', function() {
      $block.toggleClass('active');
      $('html, body').animate({
        scrollTop: $("#resume").offset().top - 35
      }, 700);
    });

  })();
    

});



function progressInPercentage(step, length) {
  return (100 / length * step).toFixed(2);
}
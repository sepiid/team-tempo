$('input').on('keyup', function() {
  var targetInput = this;
  if($.trim(this.value).length) {
    $(targetInput).addClass('show');
  } else {
    $(targetInput).removeClass('show');
  }
});

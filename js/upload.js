$(document).ready(function() {
  $('.choose-file').change(function(e) {
    var filenames = '';
    var spantext = $(this).parent().find('span');
    if (this.files && this.files.length > 0) {
      var info = $('.file-info');
      var item = $('.file-info-item.template');
      $.each(this.files, function(i, file) {
        info.append(item.clone().removeClass('template').text(file.name));
      });
    } else {
      $('.file-info-item:not(template)').remove();
    }
  });
});
